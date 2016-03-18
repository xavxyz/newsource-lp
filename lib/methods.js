import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import Reports from './collections';

Reports.methods = {};

Reports.methods.createReport = new ValidatedMethod({
	name: 'Reports.methods.createReport',
	validate: Reports.schema.validator(),
	run (report) {
		if (Meteor.isClient) {
			// XXX analytics
		}

		return Reports.insert(report);
	}
});

Reports.methods.assignReport = new ValidatedMethod({
	name: 'Reports.methods.assignReport',
	validate: new SimpleSchema({
		email: { type: SimpleSchema.RegEx.Email },
		reportId: { type: String }
	}).validator(),
	run ({ email, reportId }) {
		if (Meteor.isClient) {
			// XXX analytics
		}

		if (Meteor.isServer) {
			const userId = Accounts.createUser({
				email,
				profile: { reportId }
			});

			Meteor.defer(function () {
				return Accounts.sendEnrollmentEmail(userId);
			});
		}
	}
});

export default Reports.methods;