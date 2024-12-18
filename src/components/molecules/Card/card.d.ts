export interface ICardProps {
    title: string;
    description: string;
    imageSrc: string;
    buttons?: ICardButton[]
}

export interface ICardButton {
    title: string;
    iconSrc: string;
    handleClick: () => void
}
  