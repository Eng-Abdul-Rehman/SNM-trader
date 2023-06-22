import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { FrequentlyData } from "./FrequentlyData";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export function FrequentlyComponent() {
  return (
    <>
      <Box sx={{ border: "1px solid #abb8c3", padding: 2, marginTop: 14 }}>
        <Typography>Frequently Bought Together</Typography>
        <Box sx={{ marginTop: 3 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {FrequentlyData.map((item) => (
              <Box sx={{ width: "35%", display: "flex", gap: 2 }}>
                <Box sx={{ width: "40%" }}>
                  <img
                    width="100%"
                    height="60%"
                    src={item.Image}
                    alt="image of headphones"
                  />
                  <Box sx={{ padding: 0.8 }}>
                    <Typography
                      sx={{
                        fontSize: "14",
                        color: "#0066cc",
                        ":hover": { color: "#fcb900" },
                      }}
                    >
                      {item.Title}
                    </Typography>
                    <Typography sx={{ marginTop: 0.8, fontSize: 14 }}>
                      ${item.Price}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: 12 }}>
                  <AddOutlinedIcon sx={{ fontSize: 30 }} />
                </Box>
                <Box sx={{ width: "40%" }}>
                  <img
                    width="100%"
                    height="60%"
                    src={item.Image2}
                    alt="image of headphones"
                  />
                  <Box sx={{ padding: 0.8 }}>
                    <Typography
                      sx={{
                        fontSize: "14",
                        color: "#0066cc",
                        ":hover": { color: "#fcb900" },
                      }}
                    >
                      {item.Title2}
                    </Typography>
                    <Typography sx={{ marginTop: 0.8, fontSize: 14 }}>
                      ${item.Price2}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ color: "#abb8c3", fontSize: 14, paddingTop: 1 }}
                >
                  Total Price:
                </Typography>
                <Typography
                  sx={{
                    color: "#ff6900",
                    fontSize: 20,
                    fontWeight: "bold",
                    paddingLeft: 0.5,
                  }}
                >
                  $928.00
                </Typography>
              </Box>

              <Button
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#fcb800",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "bold",
                  width: "160px",
                  height: "40px",
                  border: "none",
                  borderRadius: 1,
                  marginTop: 1,
                  ":hover": {
                    textTransform: "capitalize",
                    backgroundColor: "#fcb800",
                  },
                }}
              >
                Add All To Cart
              </Button>
              <Button
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: 14,
                  fontWeight: "bold",
                  width: "170px",
                  height: "40px",
                  border: "1px solid #abb8c3",
                  borderRadius: 1,
                  marginTop: 1,
                  ":hover": {
                    textTransform: "capitalize",
                    backgroundColor: "white",
                  },
                }}
              >
                Add All To
              </Button>
              <Box sx={{ width: "170px", marginTop: 1 }}>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold", textAlign: "center" }}
                >
                  Wishlist
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{marginTop: 5}}>
            <Box sx={{ display: "flex" }}>
              <FormControlLabel
                sx={{ fontWeight: "bold" }}
                control={<Checkbox defaultChecked />}
              />
              <Box
                sx={{ marginTop: 1.3, marginLeft: -2, display: "flex", gap: 1 }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  This item:
                </Typography>
                <Typography sx={{ fontSize: 14, color: "#abb8c3" }}>
                  Sound Intone I65 Earphone White Version
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold", color: "#cf2e2e" }}
                >
                  ($105.30)
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex" }}>
              <FormControlLabel
                sx={{ fontWeight: "bold" }}
                control={<Checkbox defaultChecked />}
              />
              <Box
                sx={{ marginTop: 1.3, marginLeft: -2, display: "flex", gap: 1 }}
              >
                <Typography sx={{ fontSize: 14, color: "#abb8c3" }}>
                  Idea Pad 1
                </Typography>
                <Typography
                  sx={{ fontSize: 14, fontWeight: "bold", color: "#cf2e2e" }}
                >
                  ($822.70)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
