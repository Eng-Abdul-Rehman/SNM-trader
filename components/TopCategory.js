import { Box, Grid } from '@mui/material'
import React from 'react'

const TopCategory = () => {
  return (
    <div>
    <div className="vc_row wpb_row vc_row-fluid">
                  <div className="martfury-container">
                    <div className="row">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <h3
                              style={{
                                fontSize: 20,
                                lineHeight: 1,
                                textAlign: "left",
                              }}
                              className="vc_custom_heading semibold vc_custom_1671603524734"
                            >
                              Top Categories Of The Month with x4Traders
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Grid container gap={3} sx={{marginBottom: -5}}>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160,height:210}}>

<img
className=" lazy"
// src="images/transparent.png"
src="/images/Pet Supplies/Furbo.jpg"
width={170}
height={170}
alt="1788e15c-7996-44d9-9280-667e0d1252c2.7b190039850092c8b617e8b0feaa0ec6"
data-original="https://x4traders.com/wp-content/uploads/2013/06/1788e15c-7996-44d9-9280-667e0d1252c2.7b190039850092c8b617e8b0feaa0ec6-170x170.webp"
/>

<a
  className=""
  href="#https://x4traders.com/product-category/consumer-electrics/"
>
  Electronics
</a>
</Box>


<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160,height:210}}>
<img
className=" lazy"
src="/images/Underwair.jpg"
width={170}
height={170}
alt="17a"

/>

<a className="" href="#">
  Clothings
</a>
</Box>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160,height:210}}>
<img
className=" lazy"
// src="images/transparent.png"
src="/images/Home & kitchen/Kodak.jpg"
width={160}
height={170}
alt="6a"

/>

<a className="" href="#">
  Computers
</a>
</Box>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160,height:210}}>
<img
className=" lazy"
// src="images/transparent.png"
src="/images/FoodCutingCizzer.jpg"
width={170}
height={170}
alt="8a"
/>

<a className="" href="#">
  Home &amp; Kitchen
</a>
</Box>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160,height:210}}>
<img
className=" lazy"
// src="images/transparent.png"
src="/images/Meli.jpg"
width={165}
height={160}
alt="11a"
/>

<a className="" href="#">
  Health &amp; Beauty
</a>
</Box>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160,height:210}}>
<img
className=" lazy"
// src="images/transparent.png"
src="/images/chaple.jpg"
width={170}
height={170}
alt="FEA-142-800x800"
/>

<a className="" href="#">
  Jewelry
</a>
</Box>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160, height:210}}>
<img
className=" lazy"
// src="images/transparent.png"
src="/images/Pet Supplies/dogCach.jpg"
width={170}
height={170}
alt="1a"
/>

<a className="" href="#">
  Technology Toys
</a>
</Box>

<Box sx={{border: "1px solid black", padding: 1,display: "flex", flexDirection: "column", gap: 0.5 , justifyContent: "center", textAlign: "center", width:160, height:210}}>
<img
className=" lazy"
// src="images/transparent.png"
src="/images/facecover.jpg"
width={140}
height={170}
alt="8a"
/>

<a className="" href="#">
  Smartphones
</a>
</Box>


</Grid>
    </div>
  )
}

export default TopCategory
