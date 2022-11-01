import Card from "../../components/Card"
import Template from "../../components/Template"

function Index (props) {
    return (
        <Template className='flex flex-wrap gap-4 mx-auto'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Template>
    )
}

export default Index