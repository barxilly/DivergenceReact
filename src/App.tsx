import { ReactNode, useState } from "react";
import reactLogo from "/img/SteveFace.png";
import "./App.css";
import { Button, Card, Title } from "mcb-ui";
import "@mantine/core/styles.css";
import "mcb-ui/dist/main.css";
import {
  Center,
  Flex,
  Image,
  MantineProvider,
  Space,
  Stack,
  Tooltip,
} from "@mantine/core";
import { FaDiscord, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  function selTab(tab: string) {
    setSelectedTab(tab);
    window.history.pushState({}, "", `/${tab === "home" ? "" : tab}`);
  }

  const Home = () => (
    <Stack h="120vh" gap={10}>
      <Card>
        <Center>
          <Stack>
            <Image
              src="/img/SeasonThree.png"
              alt="React Logo"
              style={{ width: 400 }}
            />
            <Center>
              {/*<Button
                style={{ width: "50%" }}
                color="primary"
                textColor="primary"
                font="Minecraft Ten"
                onClick={() => window.open("https://www.youtube.com")}
              >
                Watch Now!&nbsp;&nbsp;
                <FaUpRightFromSquare />
              </Button>*/}
              <Button
                style={{ width: "80%" }}
                color="secondary"
                textColor="secondary"
                font="Minecraft Ten"
                disabled
              >
                Coming Very Soon!
              </Button>
            </Center>
          </Stack>
        </Center>
      </Card>
      <Card
        style={{
          background: "url(/img/Majs.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Space h={40} />
        <Center>
          <Button
            style={{ width: "20em" }}
            color="secondary"
            textColor="secondary"
            font="Minecraft Seven"
            onClick={() =>
              window.open(
                "https://drive.usercontent.google.com/download?id=1LIxNJVkE6x7FCBAJHTKxb7Bq4IjC3fKi&export=download"
              )
            }
          >
            Download Season 1 Map
          </Button>
        </Center>
        <Space h={40} />
      </Card>
      <Card>
        <Center>
          <Stack>
            <Title
              style={{ paddingLeft: "0.3em", paddingRight: "0.5em" }}
              level={3}
            >
              Welcome to Divergence!
            </Title>
            <Title
              style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
              level={5}
            >
              Divergence is a Minecraft SMP based in the Bedrock Edition of the
              game. We are a group of 10 or so friends who get in the server to
              try and make the best content we can.
            </Title>
            <Title
              style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
              level={5}
            >
              We are currently on our third season, we run new seasons just
              about once a year. And we also run mini-seasons like our Hardcore
              season, and events like our Wardenball games.
            </Title>
            <Title
              style={{ paddingLeft: "0.5em", paddingRight: "0.5em" }}
              level={5}
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
                onClick={() => window.open("https://discord.gg/4C7Q3H8")}
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
    </Stack>
  );

  const MemCard = (
    name: string,
    desc: string,
    icon: string,
    socials: ReactNode,
    joined?: string
  ) => (
    <Card style={{ position: "relative" }}>
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
          <Title level={3}>{name}</Title>
          <Title level={5}>{desc}</Title>
          <Flex style={{ color: "#fff", userSelect: "none" }}>{socials}</Flex>
        </Stack>

        <Card
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            backgroundColor: "#aaa",
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

  const Members = () => (
    <Stack gap={0}>
      <Card>
        <Title level={2} center>
          Members
        </Title>
        <Title level={5} center>
          Meet the members of Divergence SMP!
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
              onClick={() => window.open("https://www.youtube.com/@kat.beanie")}
            />
            &nbsp; &nbsp;
            <FaTwitch
              className="sb sb-tw"
              size={20}
              onClick={() => window.open("https://www.twitch.tv/kat_beanie")}
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
                window.open("https://bsky.app/profile/katbeanie.bsky.social")
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
              onClick={() => window.open("https://www.twitch.tv/diggintruths")}
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
          reactLogo,
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
          reactLogo,
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
          reactLogo,
          <>
            <FaTwitch
              className="sb sb-tw"
              size={20}
              onClick={() => window.open("https://www.twitch.tv/badrabbit1971")}
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
          reactLogo,
          <>
            <FaTwitch
              className="sb sb-tw"
              size={20}
              onClick={() => window.open("https://www.twitch.tv/sillycubed")}
            />
            &nbsp; &nbsp;
            <FaBluesky
              className="sb sb-bs"
              size={20}
              onClick={() => window.open("https://bsky.app/profile/silly.sbs")}
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
              onClick={() => window.open("https://www.twitch.tv/holymist6249")}
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
              onClick={() => window.open("https://www.twitch.tv/rockymender")}
            />
          </>,
          "II"
        )}
        {MemCard("JewelFireoak", "Da scary.", reactLogo, <></>, "II")}
        {MemCard("HearNoEvil", "Da Kevin.", reactLogo, <></>, "II")}
      </Stack>
    </Stack>
  );

  const Apply = () => (
    <>
      <iframe
        src="https://form.typeform.com/to/ZZvhDA9i?typeform-embed-id=42519322876785104&amp;typeform-embed=embed-widget&amp;typeform-source=divergence.live&amp;typeform-medium=snippet&amp;typeform-medium-version=next&amp;embed-hide-headers=true&amp;embed-opacity=100&amp;typeform-embed-handles-redirect=1&amp;typeform-embed-no-heading=true"
        data-testid="iframe"
        style={{ border: "0px", height: "90vh", transform: "translateZ(0px)" }}
        allow="microphone; camera"
        title="Divergence SMP Application Form"
        data-dashlane-frameid="55834574851"
      ></iframe>
    </>
  );

  const Downloads = () => (
    <Stack style={{ height: "90vh" }} gap={0}>
      <Card
        style={{
          background: "url(/img/Majs.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Center>
          <Stack>
            <Image
              src="/img/SeasonOne.png"
              alt="React Logo"
              style={{ width: 400 }}
            />
            <Center>
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
          background: "url(/img/Spawn.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Center>
          <Stack>
            <Image
              src="/img/SeasonTwo.png"
              alt="React Logo"
              style={{ width: 400 }}
            />
            <Center>
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

  window.onload = () => {
    if (window.location.pathname === "/members") {
      selTab("members");
    } else if (window.location.pathname === "/join") {
      selTab("join");
    } else if (window.location.pathname === "/downloads") {
      selTab("downloads");
    } else {
      selTab("home");
    }
  };

  return (
    <MantineProvider>
      <Stack id="mainstack" gap={0}>
        <Center h="10vh" id="logobar">
          <Image
            src="/img/Divergence.png"
            alt="React Logo"
            style={{ width: 400 }}
          />
        </Center>
        <Flex id="buttonbar">
          <Button
            style={{
              width: "33.33vw",
            }}
            color={selectedTab === "home" ? "primary" : "secondary"}
            textColor={selectedTab === "home" ? "primary" : "secondary"}
            onClick={() => selTab("home")}
            font={selectedTab === "home" ? "Minecraft Ten" : "Minecraft Seven"}
          >
            Home
          </Button>
          <Button
            color={selectedTab === "members" ? "primary" : "secondary"}
            textColor={selectedTab === "members" ? "primary" : "secondary"}
            style={{ width: "33.33vw" }}
            onClick={() => selTab("members")}
            font={
              selectedTab === "members" ? "Minecraft Ten" : "Minecraft Seven"
            }
          >
            Members
          </Button>
          <Button
            color={selectedTab === "join" ? "primary" : "secondary"}
            textColor={selectedTab === "join" ? "primary" : "secondary"}
            style={{
              width: "33.33vw",
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
              width: "33.33vw",
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
          ) : selectedTab === "members" ? (
            <Members />
          ) : selectedTab === "join" ? (
            <Apply />
          ) : selectedTab === "downloads" ? (
            <Downloads />
          ) : (
            <Center h="80vh">Error</Center>
          )}
        </Stack>
      </Stack>
    </MantineProvider>
  );
}

export default App;
