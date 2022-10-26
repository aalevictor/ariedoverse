
import { useState } from "react";
import { clsx } from 'clsx'
import { CaretDown, CaretUp, User } from 'phosphor-react';
import * as Collapsible from '@radix-ui/react-collapsible';

// const perks = [ 'C# DE NITRO', 'TROCA-TROCA', 'TRATAMENTO PRECOCE', 'CAI NUNCA', 'RATO DE ACADEMIA', 'DUAS SANFONADAS', 'DEIXA QUE EU COBRO', 'PITBULL', 'OPORTUNISTA', 'OLHA O LADRÃO', 'CABEÇA FRIA', 'CORAÇÃO QUENTE', 'NÃO VALE BOMBA', 'SÓ VALE DE LONGE', 'TIK-TOKA', 'COLA NO PÉ', 'DRIBLE DEVERIA VALER PA', 'PETER CROUCH DA SHOPEE', 'CUCABOL', 'COACHING QUÂNTICO', 'REI DO CHUTÃO', 'EDERSON DO ALIEXPRESS', 'COMO UM GATO', 'BEM POSICIONADO', 'MÃO FIRME', 'PONTOS ESCONDIDOS', 'CLUTCHZEIRO', 'INABALÁVEL', 'JOELHO DE AÇO', 'PONTOS LIVRES' ]
const INITIAL = false

export function PlayerRoot({ children }) {
    return (
        <div className='h-fit relative p-2 py-4 mx-auto w-[90%] max-w-[1024px] flex flex-col gap-4 my-auto'>
            { children }
        </div>
    )
}

PlayerRoot.displayName = 'Player.Root'

export function PlayerContent({ children }) {
    return (
        <div className='grid grid-cols-5 gap-1 max-lg:flex max-lg:flex-col max-lg:gap-0'>
            { children }
        </div>
    )
}

PlayerContent.displayName = 'Player.Content'

export function PlayerHeader({ player, URI }) {
    const content = (
        <div className='grid grid-rows-1 grid-cols-5 gap-16 max-lg:flex max-lg:flex-col max-lg:gap-1'>
            <PlayerImage URI={URI} />
            <div className='text-offwhite col-span-4 gap-1 flex-col flex'>
                <div className='font-semibold text-lg px-3 max-lg:my-3 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto max-lg:text-center'>{player.name} ({player.age} anos)</div>
                <div className='grid grid-rows-4 grid-cols-2 gap-1 max-lg:flex max-lg:flex-col max-lg:w-full'>
                    <PlayerAttribute value={player.birthDate} attrib='Nascimento' bg />
                    <PlayerAttribute value={player.contractEnd} attrib='Contrato' bg keep />
                    <PlayerAttribute value={player.nationality} attrib='Nacionalidade' keep />
                    <PlayerAttribute value={player.secondNationality} attrib='2a Nacionalidade' />
                    <PlayerAttribute value={player.club} attrib='Clube' bg />
                    <PlayerAttribute value={player.wage} attrib='Salário' bg keep />
                    <PlayerAttribute value={player.currentAbility} attrib='C. Atual (CA)' keep />
                    <PlayerAttribute value={player.potentialAbility} attrib='C. Potencial (PA)' />
                </div>
            </div>
        </div>
    )
    
    return(content)
}

PlayerHeader.displayName = 'Player.Header'

export function PlayerTechnicals({ technicals }) {
	const [ open, setOpen ] = useState(INITIAL)

    const content = (
        <Collapsible.Root className={clsx(
            'flex flex-col gap-1 w-full',
            open ? 'max-lg:mb-6' : 'max-lg:mb-0'
         )} open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                Técnicos
                { open ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
            </Collapsible.Trigger>
            <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1'>
                <PlayerAttribute value={technicals.heading} attrib='Cabeceamento' bg color />
                <PlayerAttribute value={technicals.corners} attrib='Escanteios' color  />
                <PlayerAttribute value={technicals.crossing} attrib='Cruzamentos' bg color />
                <PlayerAttribute value={technicals.tackling} attrib='Desarme' color />
                <PlayerAttribute value={technicals.finishing} attrib='Finalização' bg color />
                <PlayerAttribute value={technicals.dribbling} attrib='Finta' color />
                <PlayerAttribute value={technicals.longThrows} attrib='Lançamentos longos' bg color />
                <PlayerAttribute value={technicals.freekick} attrib='Livres' color />
                <PlayerAttribute value={technicals.marking} attrib='Marcação' bg color />
                <PlayerAttribute value={technicals.penaltyTaking} attrib='Marcação de Penaltis' color />
                <PlayerAttribute value={technicals.passing} attrib='Passe' bg color />
                <PlayerAttribute value={technicals.firstTouch} attrib='Primeiro toque' color />
                <PlayerAttribute value={technicals.longShots} attrib='Remates de longe' bg color />
                <PlayerAttribute value={technicals.technique} attrib='Técnica' color />
            </Collapsible.Content>
        </Collapsible.Root>
    )
    
    return(content)
}

PlayerTechnicals.displayName = 'Player.Technicals'

export function PlayerGoalkeeper({ goalkeeper }) {
	const [ open, setOpen ] = useState(INITIAL)

    const content = (
        <Collapsible.Root className={clsx(
            'flex flex-col gap-1 w-full',
            open ? 'max-lg:mb-6' : 'max-lg:mb-0'
         )} open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                Goleiro
                { open ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
            </Collapsible.Trigger>
            <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1'>
                <PlayerAttribute value={goalkeeper.rushingOut} attrib='Saída do gol' bg color />
                <PlayerAttribute value={goalkeeper.tendencyPunch} attrib='Socar' color  />
                <PlayerAttribute value={goalkeeper.aerialAbility} attrib='Alcance aéreo' bg color />
                <PlayerAttribute value={goalkeeper.commandArea} attrib='Comando de Área' color />
                <PlayerAttribute value={goalkeeper.communication} attrib='Comunicação' bg color />
                <PlayerAttribute value={goalkeeper.eccentricity} attrib='Excentricidade' color />
                <PlayerAttribute value={goalkeeper.handling} attrib='Jogo de Mãos' bg color />
                <PlayerAttribute value={goalkeeper.throwing} attrib='Lançamentos' color />
                <PlayerAttribute value={goalkeeper.passing} attrib='Passe' bg color />
                <PlayerAttribute value={goalkeeper.kicking} attrib='Pontapé' color />
                <PlayerAttribute value={goalkeeper.firstTouch} attrib='Primeiro Toque' bg color />
                <PlayerAttribute value={goalkeeper.reflexes} attrib='Reflexos' color />
                <PlayerAttribute value={goalkeeper.oneOnOne} attrib='Um para um' bg color />
            </Collapsible.Content>
        </Collapsible.Root>
    )
    
    return(content)
}

PlayerGoalkeeper.displayName = 'Player.Goalkeeper'

export function PlayerMentals({ mentals }) {
	const [ open, setOpen ] = useState(INITIAL)

    const content = (
        <Collapsible.Root className={clsx(
            'flex flex-col gap-1 w-full',
            open ? 'max-lg:mb-6' : 'max-lg:mb-0'
         )} open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                Mentais
                { open ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
            </Collapsible.Trigger>
            <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1'>
                <PlayerAttribute value={mentals.aggression} attrib='Agressividade' bg color />
                <PlayerAttribute value={mentals.anticipation} attrib='Antecipação' color  />
                <PlayerAttribute value={mentals.bravery} attrib='Bravura' bg color />
                <PlayerAttribute value={mentals.composure} attrib='Compostura' color />
                <PlayerAttribute value={mentals.concentration} attrib='Concentração' bg color />
                <PlayerAttribute value={mentals.decisions} attrib='Decisões' color />
                <PlayerAttribute value={mentals.determination} attrib='Determinação' bg color />
                <PlayerAttribute value={mentals.flair} attrib='Imprevisibilidade' color />
                <PlayerAttribute value={mentals.workRate} attrib='Índice de Trabalho' bg color />
                <PlayerAttribute value={mentals.leadership} attrib='Liderança' color />
                <PlayerAttribute value={mentals.positioning} attrib='Posicionamento' bg color />
                <PlayerAttribute value={mentals.offBall} attrib='Sem Bola' color />
                <PlayerAttribute value={mentals.teamwork} attrib='Trabalho de equipe' bg color />
                <PlayerAttribute value={mentals.vision} attrib='Visão de jogo' color />
            </Collapsible.Content>
        </Collapsible.Root>
    )
    
    return(content)
}

PlayerMentals.displayName = 'Player.Mentals'

export function PlayerPhysicals({ physicals, position, goalkeeper }) {
    const [ openGK, setOpenGK ] = useState(INITIAL)
    const [ open, setOpen ] = useState(INITIAL)

    var keeper = (<></>)
    if (position === 'GR'){
        keeper = (
            <Collapsible.Root className={clsx(
                'flex flex-col gap-1 w-full mt-10',
                openGK ? 'max-lg:mb-6 max-lg:mt-6' : 'max-lg:mb-0'
             )} open={openGK} onOpenChange={setOpenGK}>
                <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                    Técnicos (GR)
                    { openGK ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
                </Collapsible.Trigger>
                <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1'>
                    <PlayerAttribute value={goalkeeper.freekick} attrib='Livres' bg color />
                    <PlayerAttribute value={goalkeeper.penaltyTaking} attrib='Marcação de Penaltis' color />
                    <PlayerAttribute value={goalkeeper.technique} attrib='Técnica' bg color />
                </Collapsible.Content>
            </Collapsible.Root>
        )
    }
    const content = (
        <Collapsible.Root className={clsx(
            'flex flex-col gap-1 w-full',
        )} open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                Físicos
                { open ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
            </Collapsible.Trigger>
            <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1'>
                <PlayerAttribute value={physicals.acceleration} attrib='Aceleraçao' bg color />
                <PlayerAttribute value={physicals.agility} attrib='Agilidade' color  />
                <PlayerAttribute value={physicals.naturalFitness} attrib='Aptidão Física' bg color />
                <PlayerAttribute value={physicals.balance} attrib='Equilíbrio' color />
                <PlayerAttribute value={physicals.strength} attrib='Força' bg color />
                <PlayerAttribute value={physicals.jumpingReach} attrib='Impulsão' color />
                <PlayerAttribute value={physicals.stamina} attrib='Resistência' bg color />
                <PlayerAttribute value={physicals.pace} attrib='Velocidade' color />
                {keeper}
            </Collapsible.Content>
        </Collapsible.Root>
    )
    
    return(content)
}

PlayerPhysicals.displayName = 'Player.Physicals'

export function PlayerHidden({ hidden }) {
	const [ open, setOpen ] = useState(INITIAL)

    const content = (
        <Collapsible.Root className={clsx(
            'flex flex-col gap-1 w-full',
            open ? 'max-lg:mb-6' : 'max-lg:mb-0'
         )} open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                Escondidos
                { open ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
            </Collapsible.Trigger>
            <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1' >
                <PlayerAttribute value={hidden.adaptability} attrib='Adaptabilidade' bg color />
                <PlayerAttribute value={hidden.ambition} attrib='Ambição' color  />
                <PlayerAttribute value={hidden.loyalty} attrib='Lealdade' bg color />
                <PlayerAttribute value={hidden.pressure} attrib='Pressão' color />
                <PlayerAttribute value={hidden.professionalism} attrib='Profissionalismo' bg color />
                <PlayerAttribute value={hidden.sportsmanship} attrib='Desportivismo' color />
                <PlayerAttribute value={hidden.temperament} attrib='Temperamento' bg color />
                <PlayerAttribute value={hidden.controversy} attrib='Controvérsia' color />
                <PlayerAttribute value={hidden.consistency} attrib='Consistência' bg color />
                <PlayerAttribute value={hidden.dirtiness} attrib='Jogo sujo' color />
                <PlayerAttribute value={hidden.importantMatches} attrib='Jogos Importantes' bg color />
                <PlayerAttribute value={hidden.injuryProneness} attrib='Propensão a lesões' color />
                <PlayerAttribute value={hidden.versatility} attrib='Versatilidade' bg color />
            </Collapsible.Content>
        </Collapsible.Root>
    )
    
    return(content)
}

PlayerHidden.displayName = 'Player.Hidden'

export function PlayerOthers({ player }) {
	const [ open, setOpen ] = useState(INITIAL)
	const [ openPosition, setOpenPosition ] = useState(INITIAL)
	const [ openPersonality, setOpenPersonality ] = useState(INITIAL)
	const [ openDescription, setOpenDescription ] = useState(INITIAL)

    const content = (
        <div className='flex flex-col gap-[3px]'>
            <Collapsible.Root className={clsx(
                'flex flex-col gap-1 w-full',
                open ? 'max-lg:mb-6' : 'max-lg:mb-0'
            )} open={open} onOpenChange={setOpen}>
                <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                    Outros
                    { open ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
                </Collapsible.Trigger>
                <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1' >
                    <PlayerAttribute value={player.height + ' cm'} attrib='Altura' bg />
                    <PlayerAttribute value={player.weight + ' kg'} attrib='Peso'  />
                    <PlayerAttribute value={player.preferredFoot} attrib='Pé preferido' bg />
                    <Collapsible.Root className={clsx(
                        'flex flex-col gap-[3px] w-full max-lg:mt-6 ',
                        openPosition ? 'max-lg:mb-6' : 'max-lg:mb-[-3px]'
                    )} open={openPosition} onOpenChange={setOpenPosition}>
                        <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                            Posições
                            { openPosition ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
                        </Collapsible.Trigger>
                        <Collapsible.Content className='flex flex-col w-full' >
                            <PlayerAttribute value={player.position} bg />
                        </Collapsible.Content>
                    </Collapsible.Root>
                    <Collapsible.Root className={clsx(
                        'flex flex-col gap-[3px] w-full',
                        openPersonality ? 'max-lg:mb-6' : 'max-lg:mb-[-3px]'
                    )} open={openPersonality} onOpenChange={setOpenPersonality}>
                        <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                            Personalidade
                            { openPersonality ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
                        </Collapsible.Trigger>
                        <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1' >
                            <PlayerAttribute value={player.personality} bg />
                        </Collapsible.Content>
                    </Collapsible.Root>
                    <Collapsible.Root className={clsx(
                        'flex flex-col gap-[3px] w-full',
                        openDescription ? 'max-lg:mb-6' : 'max-lg:mb-[-3px]'
                    )} open={openDescription} onOpenChange={setOpenDescription}>
                        <Collapsible.Trigger className='items-center justify-between flex font-semibold text-md text-offwhite px-2 py-1 max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto lg:text-left rounded hover:bg-grey-1 hover:bg-opacity-40'>
                            Descrição
                            { openDescription ? <CaretUp size={20} weight='bold'/> : <CaretDown size={20} weight='bold'/> }
                        </Collapsible.Trigger>
                        <Collapsible.Content className='flex flex-col gap-1 w-full max-lg:mt-1' >
                            <PlayerAttribute value={player.pressDescription} bg />
                        </Collapsible.Content>
                    </Collapsible.Root>
                </Collapsible.Content>
            </Collapsible.Root>
        </div>
    )
    
    return(content)
}

PlayerOthers.displayName = 'Player.Others'

export function PlayerAttribute({ attrib='', value, bg=false, keep=false, color=false }) {
    var txColor = ''
    if (color) {
        try {
            var num = parseInt(value)
            if (num > 15)
                txColor = 'text-great'
            else if (num > 10)
                txColor = 'text-good'
            else if (num > 5)
                txColor = 'text-regular'
            else
                txColor = 'text-bad'
        } catch(err) {}
    }
    return (
        <div className={clsx(
            'px-3 py-2 text-xs text-offwhite justify-between flex whitespace-nowrap overflow-hidden text-ellipsis max-lg:max-w-[500px] max-lg:w-full max-lg:mx-auto',
            bg ? 'rounded bg-grey-1 bg-opacity-40' : 'rounded bg-transparent',
            keep ? bg ? 'max-lg:bg-transparent' : 'max-lg:bg-grey-1 max-lg:bg-opacity-40' : ''
        )}>
            {attrib !== '' ? <span title={attrib}>{attrib}</span> : ''}
            <span title={value} className={clsx(
                color ? [txColor, 'font-semibold'] : '',
                'whitespace-nowrap overflow-hidden text-ellipsis',
                color && bg ? 'stroke-offwhite' : 'stroke-offwhite',
            )}>{value !== '' ? value : '-'}</span>
        </div>
    )
}

PlayerAttribute.displayName = 'Player.Attribute'

export function PlayerImage({ URI }) {
    if (URI){
        return (
            <div className='bg-grey-1 bg-opacity-40 rounded w-[200px] h-[200px] mx-auto'>
                <img src={URI} className='w-[95%] mx-auto mt-[5%]' alt="" />
            </div>
        )
    } else {
        return (
            <div className='bg-grey-1 bg-opacity-40 rounded w-[200px] h-fit mx-auto text-blue-3'>
                <User size='100%' weight='fill' className='w-[95%] mx-auto mt-[5%]' />
            </div>
        )
    }
}

PlayerImage.displayName = 'Player.Image'

export function PlayerExtras({ extras, position }) {
    if (position === 'GR'){
        return <PlayerGoalkeeper goalkeeper={extras} />
    } else {
        return <PlayerTechnicals technicals={extras} />
    }
}

PlayerExtras.displayName = 'Player.Extras'

export const Player = {
    Root: PlayerRoot,
    Content: PlayerContent,
    Image: PlayerImage,
    Header: PlayerHeader,
    Attribute: PlayerAttribute,
    Technicals: PlayerTechnicals,
    Goalkeeper: PlayerGoalkeeper,
    Extras: PlayerExtras,
    Mentals: PlayerMentals,
    Physicals: PlayerPhysicals,
    Hidden: PlayerHidden,
    Others: PlayerOthers,
}