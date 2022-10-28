import { useState } from 'react'
import DataTable from 'react-data-table-component';

const paginationComponentOptions = { 
	rowsPerPageText: 'Registros por página:', 
	rangeSeparatorText: 'de', 
	noRowsPerPage: false, 
	selectAllRowsItem: false, 
	selectAllRowsItemText: 'Todos' }

const customStyles = {
	table: {
		style: {
			fontFamily: 'Inter',
			backgroundColor: 'transparent',
		}
	},
	subHeader: {
		style: {
			backgroundColor: 'transparent',
			paddingRight: 0,
			paddingLeft: 0,
		}
	},
	headRow: {
		style: {
			borderRadius: '4px',
			backgroundColor: 'transparent',
			color: '#FFF4D3',
			padding: '8px',
		}
	},
    rows: {
        style: {
			marginTop: '8px',
			borderRadius: '4px',
			backgroundColor: 'rgba(100, 114, 136, 0.4)',
			color: '#FFF4D3',
			padding: '8px',
        },
    },
    headCells: {
        style: {
			fontSize: '14px',
        },
    },
    cells: {
        style: {
            
        },
    },
	pagination: {
		style: {
			borderRadius: '4px',
			backgroundColor: 'transparent',
			color: '#FFF4D3',
			marginTop: '8px',
		},
		pageButtonsStyle: {
			color: '#FFF4D3',
			fill: '#FFF4D3',
		}
	},
	noData: {
		style: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: '8px',
			borderRadius: '4px',
			backgroundColor: 'rgba(100, 114, 136, 0.4)',
			color: '#FFF4D3',
			padding: '24px',
		},
	}
};

function Tables({ columns, data, subHeaderComponentMemo }) {
	const [resetPaginationToggle, ] = useState(false)

  	return (
		<DataTable
			columns={columns}
			data={data}
			subHeader
			subHeaderComponent={subHeaderComponentMemo}
			customStyles={customStyles}
			pagination
			paginationResetDefaultPage={resetPaginationToggle}
			paginationComponentOptions={paginationComponentOptions}
			responsive
			noDataComponent='Sem nenhum registro encontrado.'
		/>
  	)
}

export default Tables