import LikeButton from './like-button';

function Header({ title }) {
    return (<h1>{title ? title : 'Default'}</h1>)
}

export default function HomePage() {
    const names = ['King Horse', 'Party Horse', 'Chef Horse'];

    return (
        <div>
            <Header title="The horses" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}