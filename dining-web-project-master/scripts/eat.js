/**
 * @file
 * All Javascript for EAT page
 */

/**
 * Section 1: Header Menu
 * Behavior for the menu bar at the header
 *
 * Sections:
 * 1.1) Controller for clicking on menu options
 */
$(document).ready(function () {
    "use strict";


    /**
     * ChooseMyPlate Controller
     * Behavior for choosing different options on the ChooseMyPlate image
     *
     * Requirements:     
     * When you click on any section of the SVG, the background color of the .eat-ribbon class will change to the corresponding color. 
     * For example if you click vegetables, color of .eat-ribbon will change to #C13937
     * 
     * It will also clear whatever text is currently in the .eat-description class and will replace it with the text associated with the class. 
     * For example, when first visiting the page, when I click on vegetables it will diplay 
     * 
     * 
     * Color key:
     * Fruits: #C13937
     * Grains: #EC8533
     * Vegetables: #C1D15A
     * Proteins: #544986
     * 
     */    
   
    $("#vegetables").click(function () {
        $('.active').removeClass('active');
        $('.vegetables').addClass('active');
        $('.eat-ribbon').css("background-color", "#C1D15A");

        
    });

    $("#fruits").click(function () {
        $('.active').removeClass('active');
        $('.fruits').addClass('active');
        $('.eat-ribbon').css("background-color", "#C13937");
    });

    $("#grains").click(function () {
        $('.active').removeClass('active');
        $('.grains').addClass('active');
        $('.eat-ribbon').css("background-color", "#EC8533");
    });

    $("#proteins").click(function () {
        $('.active').removeClass('active');
        $('.proteins').addClass('active');
        $('.eat-ribbon').css("background-color", "#544986");
    });

   
});