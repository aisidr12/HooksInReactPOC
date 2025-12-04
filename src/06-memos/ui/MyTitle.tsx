interface Props{
    title : string;
}

export const MyTitle = ({title}: Props) => {
  console.log('My title Re-render');
  
    return (
    <h1 className="text-3xl">{title}</h1>
  )
}
