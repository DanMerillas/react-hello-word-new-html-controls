
import Article1 from './Article1'
import Article2 from './Article2'
import { CustomAside } from './CustomAside'

export function CustomMain(){
    return <main>
    <CustomAside/>
    <section className='main'>
     <Article1/>
      <Article2/>
    </section>

  </main>
}