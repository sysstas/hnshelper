import '../ui/html/ApplicationLayout.html';
import '../ui/html/welcome.html';
import '../ui/html/home.html';
import '../ui/html/navbar.html';
import '../ui/html/audits.html';
import '../ui/html/reports.html';



// Configuring router
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

// Landing page
Router.route('/', function () {
  this.render('welcome', {
    to:"main"
  });
});

//home page
Router.route('/home', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('home', {
    to:"main"
  });
});

//audits page
Router.route('/audits', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('audits', {
    to:"main"
  });
});

//reports page
Router.route('/reports', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('reporst', {
    to:"main"
  });
});
