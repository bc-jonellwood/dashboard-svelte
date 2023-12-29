<script>
	import { Line } from 'svelte-chartjs';
	import { data } from '../../routes/api/getFleetTicketData/chartData.js';

	import {
		Chart as ChartJS,
		Title,
		Tooltip,
		Legend,
		LineElement,
		LinearScale,
		PointElement,
		CategoryScale
	} from 'chart.js';

	ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);
</script>

<Line {data} options={{ responsive: true }} />
