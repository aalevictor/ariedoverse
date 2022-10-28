import { Text } from '../../components/Text'
import { useEffect, useMemo, useState } from 'react'
import { TextInput } from '../../components/TextInput'
import { Select } from '../../components/Select'
import { useSearchParams } from "react-router-dom";

import * as SelectR from '@radix-ui/react-select';
import Template from '../../components/Template';
import Tables from '../../components/Tables';

const columns = [
    {
        name: 'Nacionalidade',
        selector: (row) => row.nationality,
        sortable: true,
    },
    {
        name: 'Nome',
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: 'Clube',
        selector: (row) => row.club,
        sortable: true,
    },
    {
        name: 'Posição',
        selector: (row) => row.position,
    },
    {
        name: 'Idade',
        selector: (row) => row.age,
    },
    {
        name: 'Salário',
        selector: (row) => row.wage,
    },
];

function PlayersList(props) {
	const [players, setPlayers] = useState([])
	const [filterName, setFilterName] = useState('')
	const [filterClub, setFilterClub] = useState('')
	const [filterNationality, setFilterNationality] = useState('')
	const [nationalities, setNationalities] = useState([])
	const [searchParams, ] = useSearchParams();

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
			<Tables columns={columns} data={filteredItems} subHeaderComponentMemo={subHeaderComponentMemo} />
		</Template>
  	)
}

export default PlayersList