module.exports = (temp, data) => {
	let output = temp.replace(/{{NAV_LIST_1}}/g, data.navList[0]);
	output = output.replace(/{{NAV_LIST_2}}/g, data.navList[1]);
	output = output.replace(/{{INFO_SECTION_TITLE}}/g, data.infoSection.title);
	output = output.replace(
		/{{INFO_SECTION_DESCRIPTION}}/g,
		data.infoSection.description
	);
	output = output.replace(/{{INFO_SECTION_BTN}}/g, data.infoSection.button);
	output = output.replace(
		/{{STATISTIC_LIST_ROOMS}}/g,
		data.statisticsSection.statisticsList.rooms
	);
	output = output.replace(
		/{{STATISTIC_LIST_AREA}}/g,
		data.statisticsSection.statisticsList.area
	);
	output = output.replace(
		/{{STATISTIC_LIST_FLOOR}}/g,
		data.statisticsSection.statisticsList.floor
	);

	return output;
};
