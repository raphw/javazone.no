import React from 'react';
import { Container, Heading, LargeHeading, Page, SmallHeading } from '../components/page';
import { Block, Content, Header, P, Pc } from '../components/block';
import { CBlock, CHeader, CContent } from '../components/centeredblock';
import Youtube from '../components/youtube';
import info1 from '../assets/info_1.jpg';
import tickets2 from '../assets/tickets_2.jpg';
import partners1 from '../assets/partners_1.jpg';

const InfoPage = () => (
    <Page name='info'>
        <Heading>
            <LargeHeading>Welcome to JavaZone 2018</LargeHeading>
            <SmallHeading>September 13-14th – Oslo, Norway</SmallHeading>
        </Heading>
        
        <AboutSection />
        <TicketSection />
        <BetterExplorerSection />
        <FaqSection />
        <ProgramSection />
        <AweZoneSection />
        <ImportantPrinciplesSection />
        <QuestionSection />
    </Page>
);

const AboutSection = () => (
    <Container>
        <Block>
            <Header><span>JavaZone 101<br />the who, what and where</span></Header>
            <Content>
                <P>
                    JavaZone – the biggest European community-driven conference for modern developers will be 17
                    years old in 2018! Don’t miss out on two days of inspiring tech talks,
                    hands on sessions, mingling, and a great party!
                </P>
                <P>
                    JavaZone is organized by <a href="https://java.no">javaBin</a>, the Norwegian Java User Group. Our goal is to
                    organize a community-driven conference for Java developers where they can learn new things,
                    share knowledge, and socialise.
                </P>
                <P>
                    We have been organizing JavaZone since 2001 and have been excited to watch the event grow bigger
                    and better every year. In 2017 we were hosting almost 200 speakers across 7 parallel tracks over
                    the course of two days. In addition we offered a selection of workshops held on the day before the
                    conference starts.
                </P>
                <P>
                    We would not be what we are today without YOU! Thank you for your support and contributions over the years.
                    Don’t procrastinate! Join 3100 fellow developers at JavaZone on 13th-14th September, 2018!
                </P>

            </Content>
        </Block>
    </Container>
);

const TicketSection = () => (
    <Container>
        <Block>
            <Header><span>First things first:<br/> your ticket!</span></Header>
            <Content>
                <P>
                    To attend JavaZone you will need a ticket. The ticket grants you access to the full
                    JavaZone experience, including workshops. The ticket sales will be opening in February 2018.
                </P>
            </Content>
        </Block>
        <img className='partners__image' src={tickets2} />
    </Container>
);

const BetterExplorerSection = () => (
    <Container>

        <Block>
            <Header><span>Two conference days</span></Header>
            <Content>
                <P>
                    Two days full of talks from renowned Norwegian and international speakers, in varying formats
                    and categories. You don't want to miss our amazing lineup. The program will be made available online around summer 2018.
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span>An after party to remember</span></Header>
            <Content>
                <P>
                    After a long day, full of unique learning experience, it feels good to chill out with something
                    nice to drink and some good food. We will be having something amazing in store for our afterparty this year as well!
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span>8 restaurants, all day long</span></Header>
            <Content>
                <P>
                    Have we mentioned good food before? Continuous delivery? Our chefs take you on a culinary trip from Japan to
                    Mexico! Olé! We promise that you will not leave the event hungry!
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span>Hands-on workshops</span></Header>
            <Content>
                <P>
                    Do you prefer practical tasks more than theory? Take part in one of our great workshops and
                    boost your knowledge and skills. The workshops are included in your ticket, but we have a limited number of seats.
                    More information, along with the registration can be found on a dedicated page in August.
                </P>
            </Content>
        </Block>

        <Block>
            <Header><span>…and a whole lotta love</span></Header>
            <Content>
                <P>
                    You will meet lots of interesting people at JavaZone! Grab your coffee and mingle away!
                </P>
            </Content>
        </Block>
        <img className='partners__image' src={info1} />
    </Container>
);

const FaqSection = () => (
    /*
     “Where is JavaZone happening?”
     JavaZone takes place at Oslo Spectrum in the heart of Norwegian capital city – picturesque Oslo.
     If you are local person, you know the way.
     If you have never been in Oslo, do not worry and check the map /HERE/
     If you are completely lost, do not be afraid to ask! Norwegians are quite friendly people.

     “I am an engineer; I need a sleep. Let me sleep please”
     Booking the hotel, uh? There are plenty of hotels and hostels around the conference centre. Searching for places close to Oslo Central Station is a good idea. You should be given few alternatives to choose from.

     “What if I get hungry?”
     Your brain needs food, we know that! That is why we bring Oslo’s best chefs who prepare great meals all day long for you. There will be 2^3 restaurants in the Expo area with 2^4 different food concepts. Believe us, if there is one thing you will not lack at JavaZone, it is food.

     “Jeg snakker ikke norsk. Will not I get bored at the conference?”
     You do not speak Norwegian? So, do not we!
     But do not worry! About 50% of the talks are held in English and the spoken language is specified in the program. Therefore, if you do not speak Norwegian, you should be able to attend many interesting talks. A tip for those who understand Norwegian, but are afraid to speak it. You can ask our speakers questions in English.
     */
    <div></div>
);

const ProgramSection = () => (
    <Container>
        <CBlock>
            <CHeader><span>The JavaZone program</span></CHeader>
            <CContent>
                <P><br />
                The full program will be made available online around summertime 2018.
                </P>
            </CContent>
        </CBlock>

        <Block>
            <Header><span>Lightning talks</span></Header>
            <Content>
                <P>
                    Lightning talks are either 10 or 20 minutes long, and often gives a quick introduction to a concept.
                    This is a great way to get a sneak peek at something new.
                </P>
            </Content>
        </Block>
        <Block>
            <Header><span>Presentations</span></Header>
            <Content>
                <P>
                    Presentations at JavaZone have a length of 45 or 60 minutes, and will give you a deeper
                    understanding of a concept than lightning talks.
                </P>
            </Content>
        </Block>
        <Block>
            <Header><span>Workshops</span></Header>
            <Content>
                <P>
                    Full blown learning session. This is where you get down and dirty with code. We’ll have full
                    day workshops in addition to shorter 2-hour and 4-hour workshops.
                </P>
            </Content>
        </Block>
        <img className='partners__image' src={partners1} />
    </Container>
);

const AweZoneSection = () => (
    <Container>
        <CBlock>
            <CHeader><span>AweZone: Celebrating the community</span></CHeader>
            <CContent>
                <P><br />
                    AweZone is JavaZone’s traditional party which takes place on the Wednesday
                    evening.
                    <br /><br />
                    The party offers a great chance to catch up with old friends, meet new ones,
                    and also experience a great line-up of entertainment!
                    <br /><br />
                    More deatils will be posted later. 
                </P>
            </CContent>
        </CBlock>
    </Container>
);

const ImportantPrinciplesSection = () => (
    <Container>
        <CBlock>
            <CHeader><span>A few very important principles</span></CHeader>
            <CContent>
                <P><br />
                    JavaZone is a 100% community-organized conference created by <a href="https://java.no">javaBin</a>. The
                    program is chosen by our independent program committee, and they operate under the principle that no-one
                    is paid to hold a presentation, and likewise that no-one can pay us to get their presentation accepted.
                    See our monetary policy for details.
                    <br/><br/>
                    We as organizers strive to create the best possible learning experience for all our speakers and
                    participants, and we expect you to do the same. Everyone is welcome at JavaZone, but we do require that
                    you treat your fellow conference participants with respect. We reserve the right to take any action
                    necessary to make sure this principle is upheld.
                    <br /><br />
                    Should any unwanted event occur, we're here to help:
                    <br/><br/>
                    <strong>Before the conference</strong>
                    <br />
                    You can contact us by email: <a href='mailto:javazone@java.no'>javazone@java.no</a> (this goes to a small
                    group of people, the core organizers)
                    <br/><br/>
                    <strong>During the conference</strong>
                    <br />
                    Ask at the info stand, and we'll be in touch. Contact information will also be available at the info stand.
                </P>
            </CContent>
        </CBlock>

    </Container>
);

const QuestionSection = () => (
    <Container>
        <CBlock>
            <CHeader><span>Questions?</span></CHeader>
            <CContent>
                <P><br />Do not hesitate to contact us, if you have any questions.
                    Contact us at <a href='mailto:javazone@java.no'>javazone@java.no</a> and we’ll try our best to give you an answer.
                </P>
                <P>
                    We are so glad to see you at JavaZone 2018!
                </P>
            </CContent>
        </CBlock>
    </Container>
);

export default InfoPage;
