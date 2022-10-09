const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const router = express.Router();
const { json } = express();
const Admin = require("../models/admin");
const Videos = require("../models/videos");
const FVideo = require("../models/fVideos");
const Team = require("../models/team");
const Services = require("../models/services");
const authAdmin = require("../middleware/authAdmin");
const CImg = require("../models/coverImg");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "temp.jpg");
  },
});
let upload = multer({ storage: storage });
var storageProfile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "profile");
  },
  filename: function (req, file, cb) {
    cb(null, "temp.jpg");
  },
});
let uploadProfile = multer({ storage: storageProfile });
router.post("/registerAdmin", async (req, res) => {
  try {
    const { name, email, phone, password, cPassword, pin } = req.body;
    if (!name || !email || !phone || !password || !cPassword || !pin) {
      res.json({ message: "error", type: "uncompleted details" });
    }
    const confirm = await Admin.findOne({ email });
    if (confirm) {
      res.json({ message: "error", type: "data already exist" });
    } else {
      if (password === cPassword) {
        const admin = await new Admin({
          name,
          email,
          phone,
          password,
          cPassword,
          pin,
        });
        if (admin) {
          const data = await admin.save();
          res
            .status(200)
            .json({ message: "done", type: "successfully registration" });
        } else {
          res
            .status(401)
            .json({ message: "error", type: "error in storing data" });
        }
      } else {
        res.json({ message: "error", type: "password not matching" });
      }
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/loginAdmin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "error" });
    }
    const admin = await Admin.findOne({ email });
    if (admin) {
      const matchPassword = await bcrypt.compare(password, admin.password);
      const token = await admin.generateAuthToken();
      if (matchPassword) {
        res.cookie("jwToken", token, {
          // expiries: new Date(Date().now() + 25892000000),
          httpOnly: true,
        });
        res.status(200).json({ message: "done" });
      } else {
        return res.status(400).json({ message: "error" });
      }
    } else {
      return res
        .status(401)
        .json({ message: "error", type: "admin not found" });
    }
  } catch (e) {
    return res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/createVideo", async (req, res) => {
  try {
    const { title, src } = req.body;
    if (!title || !src) {
      res.json({ message: "error", type: "uncompleted details" });
    }
    const existVideo = await Videos.findOne({ title });
    if (existVideo) {
      return res.json({ message: "error", type: "data already exist" });
    }
    const video = await new Videos({
      title,
      src,
    });
    if (video) {
      const addVideo = await video.save();
      res
        .status(200)
        .json({ message: "done", type: "video added successfully" });
    } else {
      res.json({ message: "error", type: "error in storing data" });
    }
  } catch (e) {
    console.log("Here is error");
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/createFVideo", async (req, res) => {
  try {
    const { title, src } = req.body;
    if (!title || !src) {
      res.json({ message: "error", type: "uncompleted details" });
    }
    const existVideo = await FVideo.findOne({ title });
    if (existVideo) {
      return res.json({ message: "error", type: "data already exist" });
    }
    const video = await new FVideo({
      title,
      src,
    });
    if (video) {
      const addVideo = await video.save();
      res
        .status(200)
        .json({ message: "done", type: "video added successfully" });
    } else {
      res.json({ message: "error", type: "error in storing data" });
    }
  } catch (e) {
    console.log("Here is error");
    res.json({ message: "error", type: "unknown error" });
  }
});

router.get("/getVideos", async (req, res) => {
  try {
    const data = await Videos.find({});
    if (data) {
      res.json({ data, message: "done", type: "data sended" });
    } else {
      res.json({ message: "error", type: "Data not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.get("/getFVideos", async (req, res) => {
  try {
    const data = await FVideo.find({});
    if (data) {
      return res.json({ data, message: "done", type: "data sended" });
    } else {
      return res.json({ message: "error", type: "Data not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/remVideo", authAdmin, async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      res.json({ message: "error" });
    }
    const data = await Videos.findOneAndDelete({ title });
    if (data) {
      res.json({ message: "done", type: "successfully deleted" });
    } else {
      res.json({ message: "error", type: "data not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/remFVideo", authAdmin, async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) {
      res.json({ message: "error" });
    }
    const data = await FVideo.findOneAndDelete({ title });
    if (data) {
      res.json({ message: "done", type: "successfully deleted" });
    } else {
      res.json({ message: "error", type: "data not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post(
  "/coverUpload",
  upload.single("Image"),
  authAdmin,
  async (req, res) => {
    try {
      const file = await new CImg({
        name: req.file.originalname,
        Image: {
          data: fs.readFileSync("uploads/temp.jpg"),
          contentType: "image/jpeg",
        },
      });
      if (file) {
        const upload = await file.save();
        if (upload) {
          res.status(200).json({ message: "done", type: "file uploaded" });
        } else {
          res.json({ message: "error", type: "unknown error" });
        }
      } else {
        res.json({ message: "error", type: "unknown error" });
      }
    } catch (e) {
      res.json({ message: "error", type: "unknown error" });
    }
  }
);
router.get("/getUploads", async (req, res) => {
  try {
    const getData = await CImg.find({});
    res
      .set({ "Content-Type": "image/jpeg" })
      .json({ imageData: getData, message: "done", type: "uploads sended" });
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.get("/getUploadsCount", async (req, res) => {
  try {
    const count = await CImg.find().countDocuments();
    if (count) {
      res.json({ message: "done", count });
    } else {
      res.json({ message: "error" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/delUpload", authAdmin, async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) {
      res.json({ message: "error", type: "id not found" });
    }
    const delUpload = await CImg.findOneAndDelete({ _id: id });
    if (delUpload) {
      res.json({ message: "done", type: "successfully deleted upload" });
    } else {
      res.json({ message: "error", type: "image not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post(
  "/addProfile",
  uploadProfile.single("Image"),
  authAdmin,
  async (req, res) => {
    try {
      res.json({ message: "done" });
      // }
    } catch (e) {
      res.json({ message: "error", type: "unknown error" });
    }
  }
);
router.post("/addTeam", authAdmin, async (req, res) => {
  try {
    const { name, description } = req.body;
    const teamData = await new Team({
      name,
      description,
      Image: {
        data: fs.readFileSync("profile/temp.jpg"),
        contentType: "image/jpeg",
      },
    });
    if (teamData) {
      const upload = await teamData.save();
      if (upload) {
        res.status(200).json({ message: "done", type: "data uploaded" });
      } else {
        res.json({ message: "error", type: "unknown error" });
      }
    } else {
      res.json({ message: "error", type: "unknown error" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.get("/getTeam", async (req, res) => {
  try {
    const getData = await Team.find({});
    res
      .set({ "Content-Type": "image/jpeg" })
      .json({ imageData: getData, message: "done", type: "uploads sended" });
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/delTeam", authAdmin, async (req, res) => {
  try {
    const id = req.body.id;
    if (!id) {
      res.json({ message: "error", type: "id not found" });
    }
    const delTeam = await Team.findOneAndDelete({ _id: id });
    if (delTeam) {
      res.json({ message: "done", type: "successfully deleted upload" });
    } else {
      res.json({ message: "error", type: "image not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/changePassword", async (req, res) => {
  try {
    const { email, pin, password, cPassword } = req.body;
    if (!email || !pin || !password || !cPassword) {
      res.json({ message: "error", type: "data not found" });
    }
    const admin = await Admin.findOne({ email });
    const matchPin = await bcrypt.compare(pin, admin.pin);
    if (matchPin) {
      const oldAdmin = await Admin.findOneAndDelete({ email });
      if (oldAdmin) {
        const newAdmin = await new Admin({
          name: admin.name,
          email,
          phone: admin.phone,
          password,
          cPassword,
          pin,
        });
        if (newAdmin) {
          const data = await newAdmin.save();
          res.json({ message: "done", type: "successfully Changed Password" });
        } else {
          res.json({ message: "error", type: "Error in new admin" });
        }
      } else {
        res.json({ message: "error", type: "unknown error while deleting" });
      }
    } else {
      res.json({ message: "error", type: "Pin not found" });
    }
  } catch (e) {
    res.json({ message: "error", type: "unknown error" });
  }
});
router.post("/createService", authAdmin, async (req, res) => {
  try {
    const { headline, description, newsContent } = req.body;
    if (!headline || !description || !newsContent) {
      return res.json({ message: "error" });
    } else {
      const addService = await new Services({
        headline,
        description,
        newsContent,
      });
      if (addService) {
        const saveService = await addService.save();
        return res.json({ message: "done" });
        // res.send({ message: "done" });
      } else {
        return res.json({ message: "error" });
      }
    }
  } catch (e) {
    return res.json({ message: "error" });
  }
});
router.get("/getServicesDataClient", async (req, res) => {
  try {
    const data = await Services.find({});
    if (data) {
      res.json({ data, message: "done" });
    } else {
      res.json({ data, message: "error" });
    }
  } catch (e) {
    res.json({ message: "error" });
  }
});
router.post("/deleteService", authAdmin, async (req, res) => {
  try {
    const headline = req.body.headline;
    const news = await Services.findOneAndDelete({ headline: headline });
    res.status(200).json({ news, message: "done" });
  } catch (e) {
    res.json({ message: "error" });
  }
});
router.get("/authAdmin", authAdmin, (req, res) => {
  try {
    res.json({ message: "done", data: req.rootAdmin });
  } catch (e) {
    res.json({ message: "error" });
  }
});
router.get("/logoutAdmin", authAdmin, (req, res) => {
  try {
    res.clearCookie("jwToken", { path: "/" }).json({ message: "done" });
  } catch (e) {
    res.json({ message: "error" });
  }
});
module.exports = router;
