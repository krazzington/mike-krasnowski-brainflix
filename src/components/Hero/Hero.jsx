import './Hero.scss';

function Hero({data}) {

    return (
        <>
        <main className="main">
            <video width="100%" src={data.video} poster={data.image} controls>
            </video>
        </main>
        </>
    )
}

export default Hero