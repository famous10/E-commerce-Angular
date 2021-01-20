import { Component, OnInit } from '@angular/core';
//import { LoginComponent } from './login/login.component';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OjaAngularEcommerce';
}
$(document).ready(function() {
  $("#sidebarCollapse").on("click", function() {
    $("#sidebar").addClass("active");
  });

  $("#sidebarCollapseX").on("click", function() {
    $("#sidebar").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function() {
    if ($("#sidebar").hasClass("active")) {
      $(".overlay").addClass("visible");
      console.log("it's working!");
    }
  });

  $("#sidebarCollapseX").on("click", function() {
    $(".overlay").removeClass("visible");
  });
});

