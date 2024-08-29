import { Code, Text } from "@radix-ui/themes";
import { useFormatter } from "next-intl";
import { rippleTimeToISOTime } from "xrpl";

interface IDateTag {
    date: number,
}

const DateTag = (props: IDateTag) => {
	const { date } = props;
	const format = useFormatter();

	const formattedDate = format.dateTime(new Date(rippleTimeToISOTime(date)), {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
		timeZone: "UTC",
	});

	return (
		<>{formattedDate}</>
	)
}

export default DateTag;