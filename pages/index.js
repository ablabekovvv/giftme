import Head from 'next/head'
import css from '../styles/main.module.css'

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>Gift me</title>
      </Head>
        <div className={css.main}>
            <div className={`${css.container} container`}>
                <div>
                    <div className={css.text}>
                        <h1 className={css.title}>Gift me </h1>
                        <p className={css.desc}>Gift.me – это сайт, где пользователи могут размещать свои желаемые
                            подарки, даже указать ссылку на этот подарок.
                            Возможность делиться вещами.</p>
                        <div><p>Создать WishList</p></div>
                    </div>
                    <div className={css.image}>
                        <img src="images/main-image1.svg" alt="Image-main1"/>
                    </div>
                </div>

                <div>
                    <div className={css.image}>
                        <img src="images/main-image2.svg" alt="Image-main1"/>
                    </div>
                    <div className={css.text2}>
                        <p className={css.desc}>Vestibulum augue tortor, condimentum et neque quis, bibendum
                            dignissim
                            neque. Pellentesque at eleifend lacus. Curabitur sodales odio sit amet lectus.</p>
                    </div>
                </div>
                <div>
                    <div className={css.text2}>
                        <p className={css.desc}>
                            Vestibulum augue tortor, condimentum et neque quis, bibendum dignissim neque.
                            Pellentesque
                            at eleifend lacus. Curabitur sodales odio sit amet lectus.
                        </p>
                    </div>
                    <div className={css.image}>
                        <img src="images/main-image3.svg" alt="Image-main1"/>
                    </div>
                </div>


            </div>
            <div className={css.whatdo}>
                <div className={css.whatdo__block}>
                    <div className={css.card}>
                        <div className={css.whatod__image}>
                            <img src="images/whatdo-image1.svg" alt="tasklist"/>
                        </div>
                        <p>Создавай</p>
                    </div>
                    <div className={css.card}>
                        <div className={css.whatod__image}>
                            <img src="images/whatdo-image2.svg" alt="tasklist"/>
                        </div>
                        <p>Делись</p>
                    </div>
                    <div className={css.card}>
                        <div className={css.whatod__image}>
                            <img src="images/whatod-image3.svg" alt="tasklist"/>
                        </div>
                        <p>Получай</p>
                    </div>
                </div>

            </div>
            <div className={`${css.container} container`}>
                <div>
                    <div className={css.text2}>
                        <p className={css.desc}>
                            Хочешь в команду супер героев?! Дари крутые вещи из своего арсенала которыми ты уже не
                            пользуешься своим друзьям, тем самым уменьшив экологический след стань частью защитников
                            природы :)
                        </p>
                    </div>
                    <div className={css.image}>
                        <img src="images/hand.svg" alt="hand"/>
                    </div>
                </div>

            </div>
            <div className={css.comp}>
                <img src="images/Macbook.svg" alt="Macbook"/>

            </div>
        </div>
    </div>
  )
}
