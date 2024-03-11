class Calendars {
	constructor(lang = 'en', country = 'US', day =  new Date()) {
		// Check if the input day is a valid date
		const parsedDate = Date.parse(day);
		if (!isNaN(parsedDate)) {
			// Create a Locale instance instead
			const baseLocale = new Intl.Locale(lang + '-' + country);

			// Initialize an object to store formatted dates
			const formattedDates = {};

			// Iterate through available calendars
			for (const calendar of baseLocale.calendars) {
				// Combine locale and calendar options
				const locale = new Intl.Locale(baseLocale.language + '-' + baseLocale.region + '-u-ca-' + calendar);

				// Use a single DateTimeFormat instance for all calendar types
				const dateTimeFormat = new Intl.DateTimeFormat(locale, {
					day: 'numeric',
					month: 'long',
					weekday: 'long',
					year: 'numeric'
				});

				// Format the date using the same DateTimeFormat instance
				const formattedDate = dateTimeFormat.format(parsedDate);

				// Store the formatted date in the formattedDates object
				formattedDates[calendar] = formattedDate;
			}

		// Return the formattedDates object directly
		return formattedDates;
		}
	}
}
