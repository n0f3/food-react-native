import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer V_K46ImFBCnAsMsFuYSCT3h-Q6os9yV-j6ey_zeSKleDV7h97aIq8Gwb0Io3VXYL-XxLzt6asTklPHAyLd8XRPGCzdHr14NSIVZSIFjikPFxbJzlR3S-pyxvHYycXnYx",
  },
});
