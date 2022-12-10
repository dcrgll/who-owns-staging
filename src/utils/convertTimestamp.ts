const convertTimestamp = (date: string) => {
	console.log
	const newDate = new Date(date)
	const newDateSting = newDate.toString()
	const newDateArray = newDateSting.split(' ')

	return ` ${newDateArray[4]}, ${newDateArray[2]} ${newDateArray[1]} ${newDateArray[3]}`
}

export default convertTimestamp
