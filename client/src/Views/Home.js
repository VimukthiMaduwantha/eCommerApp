import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import background from '../Images/back.jpg'
import Marquee from 'react-fast-marquee'
import img1 from '../Images/Brands/apple.webp'
import img2 from '../Images/Brands/asus.avif'
import img3 from '../Images/Brands/gogle.webp'
import img4 from '../Images/Brands/lenovo.avif'
import img5 from '../Images/Brands/mi.avif'
import img6 from '../Images/Brands/ms.png'
import img7 from '../Images/Brands/msi.png'
import img8 from '../Images/Brands/oneplus.avif'
import img9 from '../Images/Brands/samsung.webp'
import img10 from '../Images/Brands/sony.webp'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

    function navigateShop() {
        navigate('/shopstore');
    }
    return (
        <>
            <Box
                sx={{
                    height: '400px',
                    background: '#F6F5F2',
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <Grid container spacing={1}>
                    <Grid item md={7} xs={12} sx={{ height: '400px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                        <Box sx={{ width: '70%' }}>
                            <h1>Premium Product</h1>
                            <h1>Online Shop</h1>
                            <Typography>
                                Welcome to Mebius, your go-to store for top-quality electronic products and exceptional customer service!
                            </Typography>
                            <button class="buttonShop" onClick={() => navigateShop()}>Shop Now</button>
                        </Box>
                    </Grid>
                </Grid>
            </Box >

            <Box>
                <Marquee pauseOnHover>
                    <div className='imageWrapper'>
                        <img src={img1} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img2} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img3} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img4} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img5} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img6} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img7} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img8} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img9} alt='' />
                    </div>
                    <div className='imageWrapper'>
                        <img src={img10} alt='' />
                    </div>
                </Marquee>
            </Box>
            <Box>

            </Box>
        </>
    )
}

export default Home