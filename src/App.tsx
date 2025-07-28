import { ReactNode, useState } from "react";
import reactLogo from "/img/SteveFace.png";
import "./App.css";
import { Button, Card, Title } from "mcb-ui";
import "@mantine/core/styles.css";
import "mcb-ui/dist/main.css";
import {
  Center,
  Flex,
  Grid,
  Image,
  MantineProvider,
  Space,
  Stack,
  Tooltip,
} from "@mantine/core";
import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaBluesky, FaUpRightFromSquare } from "react-icons/fa6";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  const [content, setContent] = useState(
    <Center>
      <Card>
        <Title level={4} center>
          Loading...
        </Title>
      </Card>
    </Center>
  );
  const [twitchContent, setTwitchContent] = useState(
    <Center>
      <Card>
        <Title level={4} center>
          Loading...
        </Title>
      </Card>
    </Center>
  );

  function selTab(tab: string) {
    setSelectedTab(tab);
    window.history.pushState({}, "", `/${tab === "home" ? "" : "?" + tab}`);
  }

  const Home = () => (
    <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
      {/*<Card
        style={{
          background: "url(/img/Spawn3.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Center>
          <Stack>
            <Image
              src="/img/SeasonThree.png"
              alt="React Logo"
              style={{
                width: "80%",
                maxWidth: "30em",
                height: "auto",
                alignSelf: "center",
              }}
            />
            <Center>
              <Button
                style={{ width: "80%" }}
                color="primary"
                textColor="primary"
                font="Minecraft Ten"
                onClick={() =>
                  window.open(
                    "https://youtube.com/playlist?list=PL35kOUeIk-oHjqXK-iaAhQUi0nhkXx0CK&si=TySjrKRRIBNWTe_U"
                  )
                }
              >
                Watch Episode 1 Now!&nbsp;&nbsp;
                <FaUpRightFromSquare />
              </Button>
            </Center>
          </Stack>
        </Center>
      </Card>
       */}{" "}
      <Card>
        <Center>
          <Stack>
            <Title
              style={{ paddingLeft: "0.3em", paddingRight: "0.5em" }}
              level={1}
              center
            >
              Welcome to Divergence!
            </Title>
            <Title
              style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
              level={4}
            >
              Divergence is a Minecraft Survival Multiplayer server based in the
              Bedrock Edition of the game. We are a group of 10 or so friends
              who get in the server to try and make the best content we can.
            </Title>
            <Title
              style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
              level={4}
            >
              We are currently on our third season, we run new seasons just
              about once a year. And we also run mini-seasons like our Hardcore
              season, and events like our Wardenball games.
            </Title>
            <Title
              style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
              level={4}
            >
              To stay in touch with us, you can join our Discord server or
              follow us on Bluesky!
            </Title>
            <Flex w="100%">
              <Button
                color="#5764f2"
                textColor="primary"
                font="Minecraft Ten"
                style={{ width: "60%" }}
                onClick={() => window.open("https://discord.gg/pRY9sNMWQX")}
              >
                Join Discord
              </Button>
              &nbsp; &nbsp;
              <Button
                color="#1083fe"
                textColor="primary"
                font="Minecraft Ten"
                style={{ width: "60%" }}
                onClick={() =>
                  window.open("https://bsky.app/profile/divergence.live")
                }
              >
                Follow Bluesky
              </Button>
            </Flex>
          </Stack>
        </Center>
      </Card>
      <Card
        style={{
          background: "#e98720",
        }}
      >
        <Center>
          <Stack>
            <Center>
              <Image
                src="/img/trevor.png"
                style={{
                  width: "70vw",
                  maxWidth: "19em",
                }}
              />
            </Center>
            <Title level={4} center>
              Divergence is raising money for the Trevor Project, a charity that
              provides crisis intervention and suicide prevention for LGBTQ+
              adolescents.
            </Title>
            <Title level={4} center>
              We're aiming to raise as much as possible for this amazing
              charity, so anything helps!
            </Title>
            <Button
              color="#f7573c"
              textColor="primary"
              font="Minecraft Ten"
              style={{ width: "100%" }}
              onClick={() =>
                window.open(
                  "https://give.thetrevorproject.org/give/f6042134/#!/donation/checkout"
                )
              }
            >
              Donate Today
            </Button>
          </Stack>
        </Center>
      </Card>
    </Stack>
  );

  const Content = () => (
    <Grid>
      <Grid.Col span="auto">
        <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
          <Center>
            <Card style={{ width: "100%", backgroundColor: "#d00" }}>
              <Center>
                <Title level={2}>LATEST VIDEOS</Title>
              </Center>
            </Card>
          </Center>
          {content}
        </Stack>
      </Grid.Col>
      {/*<Grid.Col span="auto"><Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
          <Center>
            <Card style={{ width: "100%", backgroundColor: "#1083fe " }}>
              <Center>
                <Title level={2}>LATEST SKEETS</Title>
              </Center>
            </Card>
          </Center>
          {content}
        </Stack></Grid.Col>*/}
        <Grid.Col span="auto">
          <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
            <Center>
              <Card style={{ width: "100%", backgroundColor: "#6441a5" }}>
                <Center>
                  <Title level={2}>TWITCH CHANNELS</Title>
                </Center>
              </Card>
            </Center>
            {twitchContent}
          </Stack>
          </Grid.Col>
    </Grid>
  );

  const MemCard = (
    name: string,
    desc: string,
    icon: string,
    socials: ReactNode,
    joined?: string,
    prospective?: boolean
  ) => (
    <Card
      style={{
        position: "relative",
        backgroundColor: prospective ? "#554466" : "#076b14",
        color: "#fff !important",
      }}
    >
      <Flex>
        <Image
          src={icon}
          alt="React Logo"
          style={{
            width: "6em",
            height: "6em",
            backgroundColor: "#fff",
          }}
        />
        <Stack pl={10} gap={5}>
          <Title style={{ color: "#fff" }} level={3}>
            {name}
          </Title>
          <Flex>
            <Title style={{ color: "#fff" }} level={5}>
              {desc}
            </Title>
            <Title style={{ color: "#A66CBB" }} level={6}>
              &nbsp;{prospective ? "(Prospective)" : ""}
            </Title>
          </Flex>
          <Flex style={{ color: "#fff", userSelect: "none" }}>{socials}</Flex>
        </Stack>

        <Card
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            backgroundColor: "#888",
            color: "#000",
            fontFamily: "Minecraft Seven",
            width: "2em",
            height: "2em",
            padding: "0",
            userSelect: "none",
          }}
        >
          <Tooltip label="Joined" position="top" withArrow>
            <Center style={{ height: "100%" }}>{joined}</Center>
          </Tooltip>
        </Card>
      </Flex>
    </Card>
  );

  const Members = () => <></>;

  const Apply = () => (
    <>
      <iframe
        src="https://tally.so/embed/wvWVdQ?alignLeft=1&hideTitle=1&dynamicHeight=0"
        data-testid="iframe"
        style={{ border: "0px", height: "90vh", transform: "translateZ(0px)" }}
        allow="microphone; camera"
        title="Divergence SMP Application Form"
        data-dashlane-frameid="55834574851"
      ></iframe>
    </>
  );

  const Downloads = () => (
    <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
      <Card
        style={{
          background: "url(/img/Majs.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
           height: "23em",
          position: "relative",
        }}
      >
        <Center>
          <Stack>
            <Image
              src="/img/SeasonOne.png"
              alt="React Logo"
              style={{ width: "100%", maxWidth: "25em" }}
            />
            <Center style={{ position: "absolute", left:"1em",bottom: "1em", width: "95%" }}>
              <Button
                style={{ width: "90%" }}
                color="primary"
                textColor="primary"
                font="Minecraft Ten"
                onClick={() =>
                  window.open(
                    "https://drive.usercontent.google.com/download?id=1LIxNJVkE6x7FCBAJHTKxb7Bq4IjC3fKi&export=download"
                  )
                }
              >
                Bedrock
              </Button>
            </Center>
          </Stack>
        </Center>
      </Card>
      <Card
        style={{
          background: "url(/img/Spawn2.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "23em",
          position: "relative",
        }}
      >
        <Center>
          <Stack>
            <Image
              src="/img/SeasonTwo.png"
              alt="React Logo"
              style={{ width: "100%", maxWidth: "25em" }}
            />
            <Center style={{ position: "absolute", left:"1em",bottom: "1em", width: "95%" }}>
              <Flex w="90%">
                <Button
                  style={{ width: "70%" }}
                  color="primary"
                  textColor="primary"
                  font="Minecraft Ten"
                  onClick={() =>
                    window.open(
                      "https://github.com/barxilly/DivergenceSMP/releases/download/s2/Divergence.Season.Two.mcworld"
                    )
                  }
                >
                  Bedrock
                </Button>
                <Button
                  style={{ width: "30%" }}
                  color="secondary"
                  textColor="secondary"
                  font="Minecraft Ten"
                  onClick={() =>
                    window.open(
                      "https://github.com/barxilly/DivergenceSMP/releases/download/s2/Divergence.Season.Two.Java.zip"
                    )
                  }
                >
                  Java
                </Button>
              </Flex>
            </Center>
          </Stack>
        </Center>
      </Card>
    </Stack>
  );
  const initdate = "2023-03-01";
  const date = new Date();
  const diff = date.getTime() - new Date(initdate).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);

  const About = () => (
    <Grid
      breakpoints={{
        sm: "1000px",
        md: "1400px",
        lg: "1900px",
        xs: "1000px",
        xl: "2100px",
      }}
    >
      <Grid.Col span={{ base: 12, md: 8, sm: 6 }}>
        <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
          <Card>
            <Title level={1} center>
              About
            </Title>
            <Title level={5} center>
              Divergence is a Minecraft SMP based in the Bedrock Edition of the
              game. We are a group of 10 or so friends who get in the server to
              try and make the best content we can.
            </Title>
          </Card>
          <Card>
            <Title level={3} center>
              We have been running for
            </Title>
            <Title level={1} center>
              {days}
            </Title>
            <Title level={3} center>
              days.
            </Title>{" "}
            <Title level={4} center>
              That's about {years} years and {months} months.
            </Title>
          </Card>
          <Card>
            <Title level={2} center>
              A Brief History
            </Title>
            <Title level={5} center>
              Divergence started in 2023 with 9 members: Kat, DigginTruths,
              Maj_Madden, BadRabbit, Silly, Amanchoo, Buster Sharp,
              SugarSkull289, and Nota. Some still in the server, some have left,
              and some more have joined.
            </Title>
            &nbsp;
            <Title level={5} center>
              The server started with a simple message in Kat.Beanie's, now
              quite defunct, Discord server where she said to say the word
              "Penguin" if you wanted to join. I mispelt the word, so
              technically I shouldn't be here.
            </Title>
            &nbsp;
            <Title level={5} center>
              We are currently on our third season. We run new seasons about
              once a year, usually starting in March.
            </Title>
          </Card>
          <Card>
            <Title level={2} center>
              Why?
            </Title>
            <Title level={5} center>
              Simply, we do it for fun, and to make content. We are not a
              business, we are not a charity, we are not a cult. We are just a
              group of friends who like to play Minecraft.
            </Title>
          </Card>
          <Card>
            <Title level={2} center>
              How?
            </Title>
            <Title level={5} center>
              We run our server on a Minecraft 10-player Realm, which is the
              maximum amount of players allowed (feel free to vote for more
              players&nbsp;
              <a href="https://feedback.minecraft.net/hc/en-us/community/posts/360076254631-Realm-Player-Cap-Raised-Teir-100">
                here
              </a>
              ). We are 99% vanilla with a few addons mostly for quality of
              life: Actions & Stuff, an addon that improves the animations and
              models in the game; Tree Capacator, an addon that allows you to
              chop down a tree by breaking one block; and a death counter below
              players' gamertags for complete and utter shaming.
            </Title>
          </Card>
          <Card>
            <Title level={2} center>
              Membership
            </Title>
            <Title level={5} center>
              There are only 2 ways to be added to Divergence. You can be
              personally referred by a current member, as people like HolyMist
              and JewelFireoak have been. Or you can apply to join, which is the
              easiest option for newcomers, by clicking apply in the top bar.
            </Title>
          </Card>
        </Stack>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
        <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
          <Card>
            <Title level={1} center>
              Current Members
            </Title>
          </Card>
          <Stack gap={0}>
            {MemCard(
              "Kat",
              "Da boss.",
              "/img/KatFace.png",
              <>
                <FaYoutube
                  className="sb sb-yt"
                  size={20}
                  onClick={() =>
                    window.open("https://www.youtube.com/@kat.beanie")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/kat_beanie")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitter
                  className="sb sb-x"
                  size={20}
                  onClick={() => window.open("https://www.x.com/autymamma")}
                />
                &nbsp; &nbsp;
                <FaBluesky
                  className="sb sb-bs"
                  size={20}
                  onClick={() =>
                    window.open(
                      "https://bsky.app/profile/katbeanie.bsky.social"
                    )
                  }
                />
              </>,
              "I"
            )}
            {MemCard(
              "DigginTruths",
              "Da biatch.",
              "/img/DigginsFace.png",
              <>
                <FaYoutube
                  className="sb sb-yt"
                  size={20}
                  onClick={() =>
                    window.open("https://www.youtube.com/@diggintruths")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/diggintruths")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitter
                  className="sb sb-x"
                  size={20}
                  onClick={() => window.open("https://www.x.com/diggintruths")}
                />
              </>,
              "I"
            )}
            {MemCard(
              "Amanchoo",
              "Da wedstone.",
              "/img/AmanchooFace.png",
              <>
                <FaYoutube
                  className="sb sb-yt"
                  size={20}
                  onClick={() =>
                    window.open("https://www.youtube.com/@amanchoo123")
                  }
                />
              </>,
              "I"
            )}
            {MemCard(
              "Maj_Madden",
              "Da disposable.",
              "/img/MajFace.png",
              <>
                <FaYoutube
                  className="sb sb-yt"
                  size={20}
                  onClick={() =>
                    window.open("https://www.youtube.com/@married-in-minecraft")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/marriednminecraft")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitter
                  className="sb sb-x"
                  size={20}
                  onClick={() => window.open("https://www.x.com/maj_madden")}
                />
                &nbsp; &nbsp;
                <FaBluesky
                  className="sb sb-bs"
                  size={20}
                  onClick={() =>
                    window.open("https://bsky.app/profile/mim.divergence.live")
                  }
                />
                &nbsp; &nbsp;
                <FaDiscord
                  className="sb sb-dc"
                  size={20}
                  onClick={() => window.open("https://discord.gg/AdpZqR3hs7")}
                />
              </>,
              "I"
            )}
            {MemCard(
              "BadRabbit",
              "Da wabbit.",
              "/img/BadRabbitFace.png ",
              <>
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/badrabbit1971")
                  }
                />
                &nbsp; &nbsp;
                <FaTwitter
                  className="sb sb-x"
                  size={20}
                  onClick={() => window.open("https://www.x.com/badrabbit1971")}
                />
              </>,
              "I"
            )}
            {MemCard(
              "Silly",
              "Da agent d'chaos.",
              "/img/SillyFace.png",
              <>
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/sillycubed")
                  }
                />
                &nbsp; &nbsp;
                <FaBluesky
                  className="sb sb-bs"
                  size={20}
                  onClick={() =>
                    window.open("https://bsky.app/profile/silly.sbs")
                  }
                />
              </>,
              "I"
            )}
            {MemCard(
              "HolyMist",
              "Da fishing.",
              reactLogo,
              <>
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/holymist6249")
                  }
                />
              </>,
              "II"
            )}
            {MemCard(
              "RockyMender",
              "Da endermen-killer.",
              reactLogo,
              <>
                <FaTwitch
                  className="sb sb-tw"
                  size={20}
                  onClick={() =>
                    window.open("https://www.twitch.tv/rockymender")
                  }
                />
              </>,
              "II"
            )}
            {MemCard(
              "JewelFireoak",
              "Da scary.",
              "/img/JewelFace.png",
              <></>,
              "II"
            )}
            {MemCard(
              "HearNoEvil",
              "Da Kevin.",
              "/img/HearNoFace.png",
              <></>,
              "II"
            )}
          </Stack>
        </Stack>
      </Grid.Col>
    </Grid>
  );

  const Contact = () => (
    <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
      <Card>
        <Title level={2} center>
          Contact
        </Title>
        <Title level={5} center>
          If you need to contact us, you can do so through our Discord server or
          by emailing Silly at&nbsp;
          <a href="mailto:sillyfromdivergence@gmail.com">
            sillyfromdivergence@gmail.com
          </a>
        </Title>
        <Space h={20} />
        <Center>
          <Button
            style={{ width: "50%" }}
            color="#5764f2"
            textColor="primary"
            font="Minecraft Ten"
            onClick={() => window.open("https://discord.gg/4C7Q3H8")}
          >
            Join Our Discord
          </Button>
        </Center>
      </Card>
    </Stack>
  );

  const GDPR = () => (
    <Stack style={{ minHeight: "80vh", height: "fit-content" }} gap={0}>
      <Card>
        <Title level={2} center>
          GDPR
        </Title>
        <Title level={5} center>
          On standard use of this website, we do not collect any personal data.
          We do not use cookies, we do not track you, we do not store your IP.
          <br />
          <br />
          If you fill out the application form, you will be asked for your email
          address, gamertag, discord username, and other personal details. This
          data is stored by Tally and is made accessible to Divergence members,
          and is used to contact you about your application. When you submit the
          form, the country you are in will also be recorded, this helps us with
          things like time zones, etc. This data is not shared with any third
          parties.
          <br />
          <br />
          Your data will be stored for as long as you are in the running to join
          the server, and will be deleted if you are not accepted. You may
          request removal of your data at any time by contacting Silly, as per
          the Data Protection Act 2018, the UK's implementation of the GDPR.
          <br />
          <br />
          We take the security of your data seriously and implement appropriate
          technical and organizational measures to protect it. For more details
          on how Tally handles your data, please refer to their privacy policy.
          <br />
          <br />
          You have the right to access, rectify, or delete your data at any
          time. To exercise these rights, please contact Silly.
        </Title>
      </Card>
    </Stack>
  );

  const Error = () => (
    <Stack h="90vh" gap={0}>
      <Card>
        <Center>
          <Image
            src="https://cdn.discordapp.com/emojis/1271865717909885081.webp?size=512&name=crayolakat"
            w={200}
          />
        </Center>
        <Title level={2} center>
          Error 404
        </Title>
        <Title level={5} center>
          Page not found.
        </Title>
      </Card>
    </Stack>
  );

  const TwitchCard = (
    displayName: string,
    username: string,
    profilePicture: string,
    followerCount: number,
    isLive: boolean,
    currentGame: string | null,
    description: string,
    streamTitle?: string
  ) => {
    const isMobile = window.innerWidth <= 768;
    
    return (
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: "0 16px 16px 16px",
          padding: "16px",
          cursor: "pointer",
          backgroundColor: "#ffffffff",
          borderRadius: "6px",
          overflow: "hidden",
          transition: "all 0.2s ease",
          color: "#000",
          border: "1px solid #ddd",
        }}
        onClick={() => window.open(`https://twitch.tv/${username}`)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ddddddff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffffff";
        }}
      >
        {/* Profile Picture Section */}
        <div
          style={{
            width: isMobile ? "120px" : "120px",
            height: isMobile ? "120px" : "120px",
            borderRadius: "50%",
            overflow: "hidden",
            marginRight: isMobile ? "0" : "16px",
            marginBottom: isMobile ? "12px" : "0",
            alignSelf: isMobile ? "center" : "flex-start",
            flexShrink: 0,
            position: "relative",
            border: isLive ? "3px solid #ff0000ff" : "3px solid #ccc",
            animation: isLive ? "borderpulse 1.5s infinite" : "none",
          }}
        >
          <Image
            src={profilePicture}
            alt={displayName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          {isLive && (
            <div
              style={{
                position: "absolute",
                bottom: "4px",
                right: "4px",
                backgroundColor: "#ff0000",
                color: "#fff",
                fontSize: "10px",
                padding: "2px 6px",
                borderRadius: "12px",
                fontWeight: "bold",
              }}
            >
              LIVE
            </div>
          )}
        </div>

        {/* Content Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: 0,
            paddingTop: "4px",
          }}
        >
          {/* Display Name */}
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "#000",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
          >
            {displayName}
          </h3>

          {/* Username */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
              gap: "8px",
            }}
          >
            <FaTwitch
              style={{
                color: "#9147ff",
                fontSize: "16px",
              }}
            />
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              {username}
            </span>
          </div>

          {/* Description or Stream Title */}
          {(isLive && streamTitle) ? (
            <p
              style={{
                margin: "0 0 8px 0",
                fontSize: "14px",
                color: "#666",
                fontFamily: "Roboto, Arial, sans-serif",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "20px",
                fontStyle: "italic",
              }}
            >
             Streaming Now: "{streamTitle}"
            </p>
          ) : description && (
            <p
              style={{
                margin: "0 0 8px 0",
                fontSize: "14px",
                color: "#666",
                fontFamily: "Roboto, Arial, sans-serif",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "20px",
              }}
            >
              {description}
            </p>
          )}

          {/* Metadata row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "auto",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              {followerCount} followers
            </span>
            {(currentGame && isLive) && (
              <>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    fontFamily: "Roboto, Arial, sans-serif",
                  }}
                >
                  •
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    color: "#888",
                    fontFamily: "Roboto, Arial, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Playing {currentGame}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const VideoCard = (
    title: string,
    author: string,
    date: string,
    link: string,
    thumbnail: string,
    viewCount: string,
    authorPfp: string
  ) => {
    const isMobile = window.innerWidth <= 768;
    
    return (
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          margin: "0 16px 16px 16px",
          padding: "16px",
          cursor: "pointer",
          backgroundColor: "#ffffffff",
          borderRadius: "6px",
          overflow: "hidden",
          transition: "all 0.2s ease",
          color: "#000",
          border: "1px solid #ddd",
        }}
        onClick={() => window.open(link)}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#ddddddff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#ffffffff";
        }}
      >
        {/* Thumbnail Section */}
        <div
          style={{
            width: isMobile ? "100%" : "320px",
            height: isMobile ? "200px" : "180px",
            borderRadius: "8px",
            overflow: "hidden",
            marginRight: isMobile ? "0" : "16px",
            marginBottom: isMobile ? "12px" : "0",
            flexShrink: 0,
            position: "relative",
          }}
        >
          <Image
            src={thumbnail}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Content Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minWidth: 0,
            paddingTop: "4px",
          }}
        >
          {/* Title */}
          <h3
            style={{
              margin: "0 0 8px 0",
              fontSize: "18px",
              fontWeight: 500,
              lineHeight: "24px",
              color: "#000",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
          >
            {title}
          </h3>

          {/* Channel info with PFP */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "4px",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                backgroundColor: "#333",
              }}
            >
              <Image
                src={authorPfp || `https://yt3.ggpht.com/a/default-user=s24-c-k-c0x00ffffff-no-rj`}
                alt={`${author} profile`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              {author}
            </span>
          </div>

          {/* Metadata row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              {viewCount} views
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
            >
              •
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "#888",
                fontFamily: "Roboto, Arial, sans-serif",
                fontWeight: 400,
              }}
            >
              {date}
            </span>
          </div>
        </div>
      </div>
    );
  };

  window.onload = async () => {
    // Preload images
    const preloadImages = () => {
      const images = [
        "/img/SteveFace.png",
        "/img/SeasonThree.png",
        "/img/trevor.png",
        "/img/Majs.webp",
        "/img/Spawn2.webp",
        "/img/SeasonOne.png",
        "/img/SeasonTwo.png",
        "/img/KatFace.png",
        "/img/DigginsFace.png",
        "/img/AmanchooFace.png",
        "/img/MajFace.png",
        "/img/BadRabbitFace.png",
        "/img/SillyFace.png",
        "/img/JewelFace.png",
        "/img/HearNoFace.png",
        "/img/Divergence.png",
      ];

      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
      });
    };

    preloadImages();

    if (window.location.toString().includes("?")) {
      const tab = window.location.toString().split("?")[1].split("&")[0];
      if (tab !== "home") {
        setSelectedTab(tab);
      } else {
        setSelectedTab("home");
      }
    }

    const url = `https://api.divergence.live/content`;
    const twitchUrl = `https://api.divergence.live/twitchinfo`;
    try {
      const _test = await fetch(url);
      console.log((await _test.json())[0].title);

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(JSON.stringify(data));
          let videos = [];
          for (let i = 0; i < data.length; i++) {
            const item = data[i];
            let title = item.title;
            const screenWidth = window.innerWidth;
            if (title.length > 36 && screenWidth < 800) {
              title = title.substring(0, 36) + "...";
            }
            const author = item.author;
            const date = item.date;
            const link = item.link;
            const thumbnail = item.thumbnail;
            const viewCount = item.viewCount;
            const authorPfp = item.authorPfp;
            const img = document.createElement("img");
            img.src = thumbnail;

            const video = VideoCard(title, author, date, link, thumbnail, viewCount, authorPfp);
            videos.push(video);
          }
          console.log(videos);
          setContent(<>{videos}</>);
        });

      fetch(twitchUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log("Twitch data:", JSON.stringify(data));
          let twitchChannels = [];
          for (let i = 0; i < data.length; i++) {
            const channel = data[i];
            const twitchCard = TwitchCard(
              channel.displayName,
              channel.username,
              channel.profilePicture,
              channel.followerCount,
              channel.isLive,
              channel.currentGame,
              channel.description,
              channel.streamTitle
            );
            twitchChannels.push(twitchCard);
          }
          console.log("Twitch channels:", twitchChannels);
          setTwitchContent(<>{twitchChannels}</>);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
      setContent(
        <Center>
          <Card>
            <Title level={4} center>
              Error loading videos.
            </Title>
          </Card>
        </Center>
      );
      setTwitchContent(
        <Center>
          <Card>
            <Title level={4} center>
              Error loading Twitch channels.
            </Title>
          </Card>
        </Center>
      );
    }
  };

  const _unused = (
    <>
      <FaUpRightFromSquare />
      <Members />
    </>
  );

  _unused;

  return (
    <MantineProvider>
      <Stack id="mainstack" gap={0}>
        <Center h="10vh" id="logobar">
          <Image
            src="/img/Divergence.png"
            alt="React Logo"
            style={{ height: "7vh", width: "auto" }}
          />
        </Center>
        <Flex
          id="buttonbar"
          style={{ width: "100vw", background: "var(--mcb-secondary-dark)" }}
        >
          <Button
            style={{
              width: "100%",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
            }}
            color={selectedTab === "home" ? "primary" : "secondary"}
            textColor={selectedTab === "home" ? "primary" : "secondary"}
            onClick={() => selTab("home")}
            font={selectedTab === "home" ? "Minecraft Ten" : "Minecraft Seven"}
          >
            Home
          </Button>
          <Button
            color={selectedTab === "about" ? "primary" : "secondary"}
            textColor={selectedTab === "about" ? "primary" : "secondary"}
            style={{
              width: "100%",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
            }}
            onClick={() => selTab("about")}
            font={selectedTab === "about" ? "Minecraft Ten" : "Minecraft Seven"}
          >
            About
          </Button>
          <Button
            color={selectedTab === "content" ? "primary" : "secondary"}
            textColor={selectedTab === "content" ? "primary" : "secondary"}
            style={{
              width: "100%",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
            }}
            onClick={() => selTab("content")}
            font={
              selectedTab === "content" ? "Minecraft Ten" : "Minecraft Seven"
            }
          >
            Content
          </Button>
          <Button
            color={selectedTab === "join" ? "primary" : "secondary"}
            textColor={selectedTab === "join" ? "primary" : "secondary"}
            style={{
              width: "100%",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
            }}
            onClick={() => selTab("join")}
            font={selectedTab === "join" ? "Minecraft Ten" : "Minecraft Seven"}
          >
            Apply
          </Button>
          <Button
            color={selectedTab === "downloads" ? "primary" : "secondary"}
            textColor={selectedTab === "downloads" ? "primary" : "secondary"}
            style={{
              width: "100%",
              paddingLeft: "0.5em",
              paddingRight: "0.5em",
            }}
            onClick={() => selTab("downloads")}
            font={
              selectedTab === "downloads" ? "Minecraft Ten" : "Minecraft Seven"
            }
          >
            Downloads
          </Button>
        </Flex>
        <Stack id="content">
          {selectedTab === "home" ? (
            <Home />
          ) : selectedTab === "content" ? (
            <Content />
          ) : selectedTab === "join" ? (
            <Apply />
          ) : selectedTab === "downloads" ? (
            <Downloads />
          ) : selectedTab === "about" ? (
            <About />
          ) : selectedTab === "contact" ? (
            <Contact />
          ) : selectedTab === "gdpr" ? (
            <GDPR />
          ) : (
            <Error />
          )}
        </Stack>
        <Stack id="footer" gap={0}>
          <Card>
            <Center>
              <Stack gap="0">
                <Title level={4} center>
                  (c) 2023-
                  {new Date().getFullYear() === 2023
                    ? ""
                    : new Date().getFullYear().toString().slice(2)}
                  &nbsp;Divergence SMP
                </Title>
                <Title level={4} center>
                  Website by&nbsp;
                  <a href="https://bsky.app/profile/silly.sbs">Silly</a>. Check
                  out the&nbsp;
                  <a href="https://github.com/barxilly/divergencereact">
                    Source Code
                  </a>
                  .
                </Title>
                <Title level={6} center>
                  Divergence is not affiliated with Mojang Studios, Microsoft or
                  Minecraft.
                </Title>
                <Title level={6} style={{ fontSize: "0.8em" }} center>
                  <a onClick={() => setSelectedTab("contact")}>Contact</a>
                  &nbsp;|&nbsp;
                  <a onClick={() => setSelectedTab("gdpr")}>GDPR</a>
                </Title>
              </Stack>
            </Center>
          </Card>
        </Stack>
      </Stack>
    </MantineProvider>
  );
}

export default App;
