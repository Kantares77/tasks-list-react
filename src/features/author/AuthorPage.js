import { Container } from "../../globalStyles";
import Section from "../../common/Section";
import Header from "../../common/Header";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Kantares"
            body={
                <>
                    <p>
                        <strong>Zawodowo</strong><br />Przeszło od 20 lat pracuję w branży automotive piastując po drodze różne stanowiska
                        m. in. inżyniera metrologii, inżyniera laboratorium, inżyniera jakości w działach wtrysku i montażu,
                        koordynatora zmian inżynieryjnych.<br />Zatem skąd zainteresowanie <em>Frontend'em?</em><br />
                        Po prostu z potrzeby <em>"oderwania"</em> się od codziennej monotonii pracy/zadań, którymi param się od tak dawna, a poza słyszałem, że podobno na naukę 
                        nigdy nie jest za poźno🤓
                        Zapewne też chęć sprawdzenia się na innym polu, a przy sprzyjającym szczęściu zmiana branży, chociaż zdaję sobię sprawę, że na rynku
                        jest mnóstwo utalentowanych ludzi, którzy swoją wiedzą mogli by zawstydzić, żeby nie powiedzieć <em>"zagiąć"</em> niejednego...ale gdyby nawet 
                        nic z tego nie wyszło to zawsze będzie to dla mnie jakaś wartość dodana, którą będę mógł wykorzystać gdzieś we własnych prywatnych projektach, które
                        mam nadzieję, że kiedyś się zrodzą😉
                    </p>
                    <p>
                        <strong>Prywatnie</strong><br/>Mąż a zarazem ojciec dwójki dzieci. Zainteresowania to m. in. muzyka ta z gatunku mocniejszych, ale nie tylko,
                        gdyż umysł mam otwarty na każdy rodzaj muzyki, który niesie coś wartościowego ze sobą. Dawnej nawet czynnie udzielałem się w lokalnych bandach 
                        <em>"szarpiąc druty"</em> jak to kiedyś mój tata skwitował🤪 Aktualnie gitara niestety odstawiona jest na bok, z braku czasu rzadziej po nią sięgam, chociaż
                        z chęcią wróciłbym do tamtych lat i tego metalowego brzmienia🎸🤘 Zwykło się mówić, że <em>"niedaleko pada jabłko od jabłoni"</em> więc nasza córka kontynuuje 
                        rodzinne ścieżki muzyczne ucząć się gry na wiolonczeli z czego jesteśmy bardzo dumni💪💪💪<br/>Poza muzyką jest też bieganie, do którego namówiła mnie 
                        żona😊 Pamiętam jak dziś kiedy zaczynałem moją przygodę z bieganiem, był ciemny, deszczowy, zimny listopadowy wieczór i te słowa mojej żony (gdy wróciłem zmarznięty i 
                        przemoczony do suchej nitki), która stwerdziła, że wybrałem sobie możliwie najgorszy moment na rozpoczęcie biegania🙃😁🤣 Tak z tym bieganiem pozostałem do dnia 
                        dzisiejszego po drodze zdobywając koronę półmaratonów oraz maratonów👑💪 Generalnie bieganie jest dobrą odskocznią od codzieności oraz dobrym sposobem na utzymanie 
                        kondycji i zdrowia, zatem tą formę aktywności polecam każdemu😉
                    </p>
                </>
            }
        />
    </Container>
);