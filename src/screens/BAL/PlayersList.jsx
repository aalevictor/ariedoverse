import { Text } from '../../components/Text'
import { useEffect, useMemo, useState } from 'react'
import { TextInput } from '../../components/TextInput'
import { Select } from '../../components/Select'
import { useSearchParams } from "react-router-dom";

import * as SelectR from '@radix-ui/react-select';
import Template from '../../components/Template';
import Tables from '../../components/Tables';

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

function PlayersList(props) {
	const [players, setPlayers] = useState([])
	const [filterName, setFilterName] = useState('')
	const [filterClub, setFilterClub] = useState('')
	const [filterNationality, setFilterNationality] = useState('')
	const [nationalities, setNationalities] = useState([])
	const [searchParams, ] = useSearchParams();
	const [xlg, setXlg] = useState(false)
	const [lg, setLg] = useState(false)
	const [md, setMd] = useState(false)
	const [sm, setSm] = useState(false)
	// const [omit5, setOmit5] = useState(false)
	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize(getWindowSize());
		}

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	useEffect(() => {
		setXlg(windowSize.innerWidth < 1024)
		setLg(windowSize.innerWidth < 920)
		setMd(windowSize.innerWidth < 800)
		setSm(windowSize.innerWidth < 640)
	}, [ windowSize ])

	const columns = [
		// {
		//     name: 'ID Único',
		//     selector: (row) => row.uniqueID,
		//     sortable: true,
		// },
		{
			name: 'Nacionalidade',
			selector: (row) => row.nationality,
			sortable: true,
		},
		{
			name: 'Nome',
			selector: (row) => <a href={`/bal/players?id=${row.uniqueID}`}>{row.name}</a>,
			sortable: true,
		},
		{
			name: 'Clube',
			selector: (row) => row.club,
			sortable: true,
			omit: sm,
		},
		{
			name: 'Posição',
			selector: (row) => row.position,
			omit: md,
		},
		{
			name: 'Idade',
			selector: (row) => row.age,
			omit: lg,
		},
		{
			name: 'Salário',
			selector: (row) => row.wage,
			omit: xlg,
		},
	];

	const baseURL = 'https://balp-api.herokuapp.com/'
  
	useEffect(() => {
		var url = `${baseURL}bal/players`

		url += searchParams.get('id') ? `/${searchParams.get('id')}` : ''

		fetch(url)
			.then(response => response.json())
			.then(
				data => {
					setPlayers(data)
					setNationalities([...new Set(data.map(item => item.nationality))].sort())
				}
			)
	}, [ searchParams ])
	
	const filteredItems = players.filter(item => item.name && item.name.toLowerCase().includes(filterName.toLowerCase()))
	.filter(item => item.club && item.club.toLowerCase().includes(filterClub.toLowerCase()))
	.filter(item => item.nationality && item.nationality.toLowerCase().includes(filterNationality.toLowerCase()))

	const subHeaderComponentMemo = useMemo(() => {
		return (
			<div className='flex flex-col gap-1 w-full pb-4'>
				<Text className='text-offwhite font-semibold'>Filtros</Text>
				<div className='grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1'>
						<TextInput.Root>
							<TextInput.Input onChange={e => setFilterName(e.target.value)} placeholder='Nome' />
						</TextInput.Root>
						<TextInput.Root>
							<TextInput.Input onChange={e => setFilterClub(e.target.value)} placeholder='Clube' />
						</TextInput.Root>
						<Select placeholder='Nacionalidade' onValueChange={setFilterNationality}>
							<SelectR.Item className='rounded text-xs text-blue-2 outline-none p-2 cursor-pointer hover:bg-grey-1 hover:bg-opacity-10' value=''>
								<SelectR.ItemText>Todos</SelectR.ItemText>
							</SelectR.Item>
							{nationalities.map(nationality => {
								return (
									<SelectR.Item className='rounded text-xs text-blue-2 outline-none p-2 cursor-pointer hover:bg-grey-1 hover:bg-opacity-10' value={nationality}>
										<SelectR.ItemText>{nationality}</SelectR.ItemText>
									</SelectR.Item>
								)
							})}
						</Select>
				</div>
			</div>
		);
	}, [ nationalities ]);

  	return (
		<Template>
			<Tables 
				columns={columns} 
				data={filteredItems} 
				subHeaderComponentMemo={subHeaderComponentMemo}
				onRowClicked={(row) => { window.location.href = `/bal/players?id=${row.uniqueID}` }}
			/>
		</Template>
  	)
}

export default PlayersList