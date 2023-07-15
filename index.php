<?php
/**
 * @package Reservation
 * @version 1.0.0
 */
/*
Plugin Name: Book Now
Plugin URI: https://ejitechlife.com/
Description: Reservation Engine plugine for hotel reservation
Author: Victor Ejiofor
Version: 1.0.0
Author URI: https://ejitechlife.com/
*/

add_shortcode('Book-Now-Plugin', 'functionBookNow');

function functionBookNow(){
    echo file_get_contents('wp-content/plugins/calender-plugin/templates/index.html');
}


add_shortcode('Select-Room-Plugin', 'functionSelectRoom');

function functionSelectRoom(){
    echo file_get_contents('wp-content/plugins/calender-plugin/templates/accomodation.html');
}


add_shortcode('booking-plugin', 'functionbooking');

function functionbooking(){
    echo file_get_contents('wp-content/plugins/calender-plugin/templates/booking.html');
}

?>