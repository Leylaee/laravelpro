import { Link } from "@inertiajs/react";

export default function Hero(){
    return(
        <>
        <section className='hero' id="hero">
                <div className='hero-background'>
                    <div className='hero-overlay'></div>
                    <div className='hero-content container-m'>
                       <h1 className='font-3 bold-500 font-size-1'>Dream Believe Achieve</h1>
                         <p className="font-4">We geloven in het verwezenlijken van dromen, in het vertrouwen op jezelf en in het realiseren van wat je voor mogelijk acht. Laat deze drie woorden je begeleiden op je reis naar succes. Word geïnspireerd, wees vastberaden en verleg grenzen.</p>
                     <Link href="#aanbod" ><button className='button-1' >Ontdek meer</button></Link>
                    </div>
                </div>
            </section>
        </>
    )
}