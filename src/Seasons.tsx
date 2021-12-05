import InlineImage from "./components/InlineImage/InlineImage"

export const Seasons = [
  'jaro', 'leto', 'podzim', 'zima'
]

export const SeasonNames: { [id: string]: string } = {
  'jaro': "Jarní Rovnodenost",
  'leto': "Letní Slunovrat",
  'podzim': "Podzimní Rovnodenost",
  'zima': "Zimní Slunovrat",
}

export const SeasonImages: { [id: string]: string } = {
  'jaro': "/season-spring.png",
  'leto': "/season-summer.png",
  'podzim': "/season-autumn.png",
  'zima': "/season-winter.png", 
}


export function SeasonInlineImages(props: {season: string}) {
  const { season } = props
  return (
    <InlineImage src={SeasonImages[season]} alt={SeasonNames[season]}/>
  )
}