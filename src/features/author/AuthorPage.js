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
                Pomimo faktu, iż zespół <strong>Coma</strong> zawieśił swoją działalność jest to zdecydowanie jeden z najlepszych bandów rockowych ostatnich lat jaki powstał w Polsce.
            </p>
            <p>
                Zespół został założony w 1998 roku w
                        Łodzi
                        przez gitarzystę Dominika Witczaka i perkusistę Tomasza Stasiaka, którzy wcześniej byli związani
                        z
                        grupą Ozoz. Z czasem do formacji dołączyli basista Rafał Matuszak, gitarzysta Wojciech Grenda i
                        wokalista Piotr Rogucki. W 2001 Grenda został zastąpiony przez Marcina Kobzę, po czym zespół
                        dotarł
                        do ostatniego etapu przesłuchań konkursu debiutów w Opolu. Dwa lata później podpisał kontrakt z
                        BMG
                        Poland.
            </p>
            </>
            }
        />
    </Container>
);