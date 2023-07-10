<template>
<HeaderPages></HeaderPages>
<router-view></router-view>
<main class="site-content" role="main">

<!-- Social section -->
<section id="social" class="parallax">
    <div class="overlay">
        <div class="container">
            <div class="row">
            
                <div class="sec-title text-center white wow animated fadeInDown">
                    <h2>FOLLOW US</h2>
                    <p>Beautifully simple follow buttons to help you get followers on</p>
                </div>
                
                <ul class="social-button">
                    <li class="wow animated zoomIn"><a href="#"><i class="fa fa-thumbs-up fa-2x"></i></a></li>
                    <li class="wow animated zoomIn" data-wow-delay="0.3s"><a href="#"><i class="fa fa-twitter fa-2x"></i></a></li>
                    <li class="wow animated zoomIn" data-wow-delay="0.6s"><a href="#"><i class="fa fa-dribbble fa-2x"></i></a></li>							
                </ul>
                
            </div>
        </div>
    </div>
</section>
<!-- end Social section -->

<!-- Contact section -->
<section id="contact" >
    <div class="container">
        <div class="row">
            
            <div class="sec-title text-center wow animated fadeInDown">
                <h2>Contact</h2>
                <p>Leave a Message</p>
            </div>
            
            
            <div class="col-md-7 contact-form wow animated fadeInLeft">
                <form action="#" method="post">
                    <div class="input-field">
                        <input type="text" name="name" class="form-control" placeholder="Your Name...">
                    </div>
                    <div class="input-field">
                        <input type="email" name="email" class="form-control" placeholder="Your Email...">
                    </div>
                    <div class="input-field">
                        <input type="text" name="subject" class="form-control" placeholder="Subject...">
                    </div>
                    <div class="input-field">
                        <textarea name="message" class="form-control" placeholder="Messages..."></textarea>
                    </div>
                    <button type="submit" id="submit" class="btn btn-blue btn-effect">Send</button>
                </form>
            </div>
            
            <div class="col-md-5 wow animated fadeInRight">
                <address class="contact-details">
                    <h3>Contact Us</h3>						
                    <p><i class="fa fa-pencil"></i>Phoenix Inc.<span>PO Box 345678</span> <span>Little Lonsdale St, Melbourne </span><span>Australia</span></p><br>
                    <p><i class="fa fa-phone"></i>Phone: (415) 124-5678 </p>
                    <p><i class="fa fa-envelope"></i>website@yourname.com</p>
                </address>
            </div>

        </div>
    </div>
</section>
<!-- end Contact section -->

<section id="google-map">
    <div id="map-canvas" class="wow animated fadeInUp"></div>
</section>

</main>
<FooterPages></FooterPages>
</template>

<script>
import HeaderPages from '@/components/Pages/Header.vue';
import FooterPages from '@/components/Pages/Footer.vue';

export default {
  name: 'App',
  components:{HeaderPages, FooterPages}
}
</script>


