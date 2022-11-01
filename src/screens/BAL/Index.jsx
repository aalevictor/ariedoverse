import { PersonSimpleRun } from "phosphor-react"
import Card from "../../components/Card"
import Template from "../../components/Template"

function Index (props) {
    return (
        <Template className='flex flex-wrap gap-4 mx-auto'>
            <Card
                icon={<PersonSimpleRun size={50} weight="duotone" />}
                title="Jogadores"
                text="Lista de jogadores na Base de Dados do BAL!"
                footer="Tire suas dúvidas"
                link="/bal/players/list"
            />
        </Template>
    )
}

export default Index