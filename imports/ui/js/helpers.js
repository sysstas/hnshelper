import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.addAudit.rendered=function() {
	$('#my-datepicker').datepicker();
}