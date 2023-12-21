<script>
	export const items = loadFromCookie() || [
		{
			propValue: 'calls3cx',
			blockName: '3CX Calls',
			component: 'Calls3CXSummary',
			id: 1,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: '3CX Calls' }
		},
		{
			propValue: 'fleetTickets',
			blockName: 'Fleet Tickets',
			component: 'TicketsFleetSummary',
			id: 2,
			x: 6,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'Fleet Tickets' }
		},
		{
			propValue: 'fleetFuel',
			blockName: 'Fleet Fuel',
			component: 'FuelFleetSummary',
			id: 3,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'Fleet Fuel' }
		},
		{
			propValue: 'websiteStatus',
			blockName: 'Website Status',
			component: 'SiteStatusSummary',
			id: 4,
			x: 6,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'Website Status' }
		},
		{
			propValue: 'weatherBulletins',
			blockName: 'Weather component',
			component: 'WeatherSummary',
			id: 5,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'Weather component' }
		},
		{
			propValue: 'eCats',
			blockName: 'eCats',
			component: 'eCatsSummary',
			id: 6,
			x: 6,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'eCats' }
		},
		{
			propValue: 'countyStore',
			blockName: 'County Store',
			component: 'CountyStoreSummary',
			id: 7,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'County Store' }
		},
		{
			propValue: 'timekeeper',
			blockName: 'Timekeeper',
			component: 'TimeKeeperSummary',
			id: 8,
			x: 6,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'Timekeeper' }
		},
		{
			propValue: 'employeeClockStatus',
			blockName: 'Employee Clock Status',
			component: 'EmployeeClockSummary',
			id: 9,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'Employee Clock Status' }
		},
		{
			propValue: 'todaysSchedule',
			blockName: 'My Scheudle',
			component: 'ScheduleSummary',
			id: 10,
			x: 6,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'My Scheudle' }
		},
		{
			propValue: 'cadCalls',
			blockName: 'CAD Calls',
			component: 'CadCallsSummary',
			id: 11,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'CAD Calls' }
		},
		{
			propValue: 'teamBirthdays',
			blockName: 'Team Birthdays',
			component: 'TeamBdaySummary',
			id: 12,
			x: 6,
			y: 2,
			w: 2,
			h: 2,
			data: { text: 'Team Birthdays' }
		},
		{
			propValue: 'foodTrucks',
			blockName: 'Food Trucks',
			component: 'FoodTruckSummary',
			id: 13,
			x: 6,
			y: 0,
			w: 2,
			h: 2,
			data: { text: 'Food Trucks' }
		}
	];
</script>
