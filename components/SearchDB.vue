<script setup>
import q from "../data/info.json";

const searchtext = ref("");

const dataset = ref(q);

watch(searchtext, () => {
    dataset.value = q.filter((a) =>
        a.name.toLowerCase().includes(searchtext.value.toLowerCase())
    );
});

function logging() {
    console.log("text: ", searchtext.value, "value: ", dataset.value);
}

</script>

<template>
	<main class="search-container items-center flex flex-col border-none">
			<div class="side-panel">
				<div class="upper">
					<input
						@keyup.enter="logging"
						v-model.trim="searchtext"
						placeholder="search by name"
						type="text" />
				</div>

				<div class="lower">
					<div class="tags grid grid-cols-2 gap-x-3 text-center mt-5 w-fit">
						<p>Agriculture Research and Education</p>
						<p>Ayush</p>
						<p>Bio Technology</p>
						<p>Central Board of Excise and Customs</p>
						<p>Chemicals and Petrochemicals</p>
						<p>Central Board of Direct Taxes</p>
					</div>
				</div>
			</div>

			<div class="main-content font-raleway">
				<table class="">
					<tr>
						<th>S.No</th>
						<th>Officer Name</th>
						<th>Contact</th>
					</tr>
					<TransitionGroup name="tableset" appear>
						<tr v-for="i in dataset" :key="i.sno">
							<td>{{ i.sno }}</td>
							<td>{{ i.name }}</td>
							<td>{{ i.email }}</td>
						</tr>
					</TransitionGroup>
				</table>
			</div>
	</main>
</template>

<style scoped>
	table {
		border-collapse: separate;
		border-spacing: 1rem 1rem;
		table-layout: fixed;
	}
	th {
		font-size: medium;
		text-align: start;
	}
	td {
		font-size: small;
	}
	.search-container {
		/* padding: 1rem; */
		background-color: rgba(245, 245, 245, 0.151);
		backdrop-filter: blur(20px);
		border-radius: 20px;
		box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.043);
	}
	.lower {
		font-family: Comme;
		font-size: smaller;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	p {
		text-align: center;
		background-color: rgba(158, 158, 164, 0.087);
		border-radius: 1rem;
		margin-bottom: 0.5rem;
		padding: 0.5rem;
		cursor: pointer;
	}
	p:hover {
		background-color: rgba(230, 156, 180, 0.893);
		/* background-color: rgba(171, 171, 228, 0.893); */
	}
	.side-panel {
		display: flex;
		box-shadow: 1px 0px 5px rgba(0, 0, 0, 0.086);
		flex-direction: column;
		align-items: center;
		padding: 10px;
		border-radius: 5px;
	}
	input {
		padding: 8px;
		border: none;
		outline: none;
		border-radius: 10px;
		background-color: rgba(245, 245, 245, 0.151);
		font-family: Space Grotesk;
	}
	li:hover {
		background-color: rgba(95, 20, 50, 0.103);
	}

    /* animation */
    
	.tableset-enter-from {
		opacity: 0;
		/* transform: scale(0); */
	}
	.tableset-leave-to {
		opacity: 0;
		transform: scale(0);
	}

	.tableset-enter-active {
		transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
	}
	.tableset-leave-active {
		transition: all 0.4s ease;
		position: absolute;
	}
	.tableset-move {
		transition: all 0.3s ease;
	}

    @media (max-width: 661px) {
        .tags {
            grid-template-columns: repeat(2, 1fr);
        }
        table {
            border-spacing: 0.4rem 0.5rem;
        }
        .main-content {
            font-size: x-small;
        }
        p {
            padding: 0.2rem;
        }
    }

    @media (max-width: 534px) {
        th {
            font-size: smaller;
        }
        td {
            font-size: x-small;
        }
        p {
            font-size: smaller;
        }
    }
    @media (max-width: 400px) {
        th {
            font-size: smaller;
        }
        td {
            font-size: x-small;
        }
        p {
            font-size: xx-small;
        }
        input {
            font-size: smaller;
        }
        .search-container {
            padding: 0;
        }
    }
</style>