import Head from "next/head";
import Image from "next/image";
import logo from "../styles/sitelogo-2x.png";

export default function Home() {
  return (
    <div className="main">
      <main>
        <div id="menu">
          <div className="blur">
            <header id="nst-head">
              <a id="menu-open" href="#menu" aria-label="Open menu">
                <img width="44" height="44" alt="" />
              </a>
              <a id="menu-close" href="#" aria-label="Close menu">
                <img width="44" height="44" alt="" />
              </a>

              <a id="nst-logo" href="/" aria-label="Home page">
                <Image height={90} width={168} src={logo} />
              </a>

              <nav
                id="nst-gnav"
                style={{ height: "auto", visibility: "visible" }}
              >
                <a className="nlink" href="https://npcap.com/">
                  Npcap.com
                </a>
                <a className="nlink" href="https://seclists.org/">
                  Seclists.org
                </a>
                <a className="nlink" href="https://sectools.org">
                  Sectools.org
                </a>
                <a className="nlink" href="https://insecure.org/">
                  Insecure.org
                </a>
              </nav>

              <form
                className="nst-search"
                id="nst-head-search"
                action="/search/"
              >
                <input
                  className="nst-search-q"
                  name="q"
                  type="search"
                  placeholder="Site Search"
                />
                <button class="nst-search-button" title="Search">
                  search
                </button>
              </form>
              <nav id="site-nav">
                <a className="nlink" href="/download.html">
                  Download
                </a>
                <a className="nlink" href="/book/man.html">
                  Reference Guide
                </a>
                <a className="nlink" href="/book/">
                  Book
                </a>
                <a className="nlink" href="/docs.html">
                  Docs
                </a>
                <a className="nlink" href="/zenmap/">
                  Zenmap GUI
                </a>
                <a className="nlink" href="/movies/">
                  In the Movies
                </a>
              </nav>
            </header>
          </div>
        </div>

        <div className="content-wrapper">
          <p className="center pbbox">
            <a href="/download">Get Nmap 7.93 here</a>
          </p>
          <h2 id="news" className="purpleheader">
            News
          </h2>
          <ul>
            <li>
              Nmap.org has been redesigned! Our new mobile-friendly layout is
              also on <a href="https://npcap.com">Npcap.com</a>,
              <a href="https://seclists.org">Seclists.org</a>,
              <a href="https://insecure.org">Insecure.org</a>, and
              <a href="https://sectools.org">Sectools.org</a>.
            </li>
            <li>
              Nmap 7.90 has been released with Npcap 1.00 along with dozens of
              other performance improvements, bug fixes, and feature
              enhancements! [
              <a href="https://seclists.org/nmap-announce/2020/1">
                Release Announcement
              </a>{" "}
              | <a href="https://nmap.org/download.html">Download page</a>]
            </li>
            <li>
              After more than 7 years of development and 170 public
              pre-releases, we're delighted to announce Npcap version 1.00! [
              <a href="https://seclists.org/nmap-announce/2020/0">
                Release Announcement
              </a>{" "}
              | <a href="https://nmap.org/npcap/">Download page</a>]
            </li>
            <li>
              Nmap 7.80 was released for DEFCON 27! [
              <a href="https://seclists.org/nmap-announce/2019/0">
                release notes
              </a>{" "}
              | <a href="https://nmap.org/download.html">download</a>]
            </li>
            <li>
              Nmap turned 20 years old on September 1, 2017! Celebrate by
              reading <a href="/p51-11.html">the original Phrack #51 article</a>
              . <a href="https://twitter.com/hashtag/Nmap20">#Nmap20</a>!
            </li>
            <li>
              Nmap 7.50 is now available! [
              <a href="https://seclists.org/nmap-announce/2017/3">
                release notes
              </a>{" "}
              | <a href="https://nmap.org/download.html">download</a>]
            </li>
            <li>
              Nmap 7 is now available! [<a href="/7/">release notes</a> |{" "}
              <a href="https://nmap.org/download.html">download</a>]
            </li>
            <li>
              We're pleased to release our new and Improved{" "}
              <a href="/favicon/">Icons of the Web</a> project—a 5-gigapixel
              interactive collage of the top million sites on the Internet!
            </li>
            <li>
              Nmap has been discovered in two new movies! It's used to{" "}
              <a href="movies/#elysium">hack Matt Damon's brain in Elysium</a>{" "}
              and also to{" "}
              <a href="movies/#gijoe">
                launch nuclear missiles in G.I. Joe: Retaliation
              </a>
              !
            </li>
            <li>
              We're delighted to announce Nmap 6.40 with 14 new{" "}
              <a href="/book/nse.html">NSE scripts</a>, hundreds of new{" "}
              <a href="/book/osdetect.html">OS</a> and{" "}
              <a href="/book/vscan.html">version detection</a> signatures, and
              many great new features! [
              <a href="https://seclists.org/nmap-announce/2013/1">
                Announcement/Details
              </a>
              ], [<a href="https://nmap.org/download.html">Download Site</a>]
            </li>
            <li>
              We just released Nmap 6.25 with 85 new NSE scripts, performance
              improvements, better OS/version detection, and more! [
              <a href="https://seclists.org/nmap-hackers/2012/4">
                Announcement/Details
              </a>
              ], [<a href="https://nmap.org/download.html">Download Site</a>]
            </li>
            <li>
              Any release as big as Nmap 6 is bound to uncover a few bugs. We've
              now fixed them with{" "}
              <a href="https://seclists.org/nmap-hackers/2012/3">Nmap 6.01</a>!
            </li>
            <li>
              Nmap 6 is now available! [<a href="/6/">release notes</a> |{" "}
              <a href="https://nmap.org/download.html">download</a>]
            </li>
            <li>
              The security community has spoken! 3,000 of you shared favorite
              security tools for our relaunched{" "}
              <a href="https://sectools.org">SecTools.Org</a>. It is sort of
              like Yelp for security tools. Are you familiar with all of the{" "}
              <a href="https://sectools.org/tag/new/">49 new tools</a> in this
              edition?
            </li>
            <li>
              <a href="https://seclists.org/nmap-hackers/2011/0">
                Nmap 5.50 Released
              </a>
              : Now with Gopher protocol support! Our first stable release in a
              year includes 177 NSE scripts, 2,982 OS fingerprints, and 7,319
              version detection signatures. Release focuses were the Nmap
              Scripting Engine, performance, Zenmap GUI, and the Nping packet
              analysis tool. [
              <a href="https://nmap.org/download">Download page</a> |{" "}
              <a href="https://seclists.org/nmap-hackers/2011/0">
                Release notes
              </a>
              ]
            </li>
            <li>
              Those who missed Defcon can now watch Fyodor and David Fifield
              demonstrate the power of the Nmap Scripting Engine. They give an
              overview of NSE, use it to explore Microsoft's global network,
              write an NSE script from scratch, and hack a webcam--all in 38
              minutes! (<a href="/presentations/BHDC10/">Presentation video</a>)
            </li>
            <li>
              <i>Icons of the Web</i>: explore favicons for the top million web
              sites with our <a href="/favicon">new poster and online viewer</a>
              .
            </li>
            <li>
              We're delighted to announce the immediate, free availability of
              the <a href="/5/">Nmap Security Scanner version 5.00</a>. Don't
              miss the <a href="/5/#5changes">top 5 improvements in Nmap 5</a>.
            </li>
            <li>
              After years of effort, we are delighted to release{" "}
              <a href="/book/">
                Nmap Network Scanning: The Official Nmap Project Guide to
                Network Discovery and Security Scanning
              </a>
              !
            </li>
            <li>
              We now have an active Nmap{" "}
              <a href="http://facebook.com/nmap">Facebook page</a> and{" "}
              <a href="http://twitter.com/nmap/">Twitter feed</a> to augment the{" "}
              <a href="#lists">mailing lists</a>. All of these options offer RSS
              feeds as well.
            </li>
          </ul>
        </div>
        <div className="content-wrapper">
          <h2 id="news" className="purpleheader">
            Nmap: Discover your network
          </h2>
          <p>
            Nmap ("Network Mapper") is a
            <a href="/npsl/">free and open source</a> utility for network
            discovery and security auditing. Many systems and network
            administrators also find it useful for tasks such as network
            inventory, managing service upgrade schedules, and monitoring host
            or service uptime. Nmap uses raw IP packets in novel ways to
            determine what hosts are available on the network, what services
            (application name and version) those hosts are offering, what
            operating systems (and OS versions) they are running, what type of
            packet filters/firewalls are in use, and dozens of other
            characteristics. It was designed to rapidly scan large networks, but
            works fine against single hosts. Nmap runs on all major computer
            operating systems, and official binary packages are available for
            Linux, Windows, and Mac OS X. In addition to the classic
            command-line Nmap executable, the Nmap suite includes an advanced
            GUI and results viewer (<a href="/zenmap/">Zenmap</a>), a flexible
            data transfer, redirection, and debugging tool (
            <a href="/ncat/">Ncat</a>), a utility for comparing scan results (
            <a href="/ndiff/">Ndiff</a>), and a packet generation and response
            analysis tool (<a href="/nping/">Nping</a>).
          </p>
          <p>
            Nmap was named “Security Product of the Year” by Linux Journal, Info
            World, LinuxQuestions.Org, and Codetalker Digest. It was even
            featured in <a href="/movies/">twelve movies</a>, including
            <a href="/movies/#matrix">The Matrix Reloaded</a>,
            <a href="/movies/#diehard4">Die Hard 4</a>,
            <a href="/movies/#gwtdt">Girl With the Dragon Tattoo</a>, and
            <a href="/movies/#bourne">The Bourne Ultimatum</a>.
          </p>
          <ul vocab="http://schema.org/" typeof="SoftwareApplication">
            <li>
              <b>Flexible</b>: Supports dozens of advanced techniques for
              mapping out networks filled with IP filters, firewalls, routers,
              and other obstacles. This includes many{" "}
              <a href="/book/man-port-scanning-techniques.html">
                port scanning
              </a>{" "}
              mechanisms (both TCP &amp; UDP),{" "}
              <a href="/book/osdetect.html">OS detection</a>,{" "}
              <a href="/book/vscan.html">version detection</a>, ping sweeps, and
              more. See the <a href="/docs.html">documentation page</a>.
            </li>
            <li>
              <b>Powerful</b>: Nmap has been used to scan huge networks of
              literally hundreds of thousands of machines.
            </li>
            <li>
              <b>Portable</b>: Most operating systems are supported, including
              <span property="operatingSystem">Linux</span>,
              <span property="operatingSystem">Microsoft Windows</span>,
              <span property="operatingSystem">FreeBSD</span>,
              <span property="operatingSystem">OpenBSD</span>,
              <span property="operatingSystem">Solaris</span>,
              <span property="operatingSystem">IRIX</span>,
              <span property="operatingSystem">Mac OS X</span>,
              <span property="operatingSystem">HP-UX</span>,
              <span property="operatingSystem">NetBSD</span>,
              <span property="operatingSystem">Sun OS</span>,
              <span property="operatingSystem">Amiga</span>, and more.
            </li>
            <li>
              <b>Easy</b>: While Nmap offers a rich set of advanced features for
              power users, you can start out as simply as
              "nmap&nbsp;-v&nbsp;-A&nbsp;<i>targethost</i>". Both traditional
              command line and graphical (GUI) versions are available to suit
              your preference. Binaries are available for those who do not wish
              to compile Nmap from source.
            </li>
            <li>
              <b>Free</b>: The primary goals of the Nmap Project is to help make
              the Internet a little more secure and to provide
              administrators/auditors/hackers with an advanced tool for
              exploring their networks. Nmap is available for{" "}
              <a href="https://nmap.org/download.html" property="downloadUrl">
                free download
              </a>
              , and also comes with full source code that you may modify and
              redistribute under the terms of the{" "}
              <a href="data/COPYING" property="license">
                license
              </a>
              .
            </li>
            <li>
              <b>Well Documented</b>: Significant effort has been put into
              comprehensive and up-to-date man pages, whitepapers, tutorials,
              and even a whole book! Find them in multiple languages{" "}
              <a href="/docs.html">here</a>.
            </li>
            <li>
              <b>Supported</b>: While Nmap comes with no warranty, it is well
              supported by a vibrant community of developers and users. Most of
              this interaction occurs on the{" "}
              <a href="#lists">Nmap mailing lists</a>. Most bug reports and
              questions should be sent to the{" "}
              <a href="https://seclists.org/nmap-dev">nmap-dev list</a>, but
              only after you read the{" "}
              <a href="/book/man-bugs.html">guidelines</a>. We recommend that
              all users subscribe to the low-traffic{" "}
              <a href="https://seclists.org/nmap-hackers">nmap-hackers</a>{" "}
              announcement list. You can also find Nmap on{" "}
              <a href="http://facebook.com/nmap">Facebook</a> and{" "}
              <a href="http://twitter.com/nmap">Twitter</a>. For real-time chat,
              join the #nmap channel on{" "}
              <a href="http://freenode.net/">Freenode</a> or{" "}
              <a href="http://www.efnet.org/">EFNet</a>.
            </li>
            <li>
              <b>Acclaimed</b>: Nmap has won numerous awards, including
              <span property="award">
                "Information Security Product of the Year" by Linux Journal
              </span>
              , Info World and Codetalker Digest. It has been featured in
              hundreds of magazine articles, several movies, dozens of books,
              and one comic book series. Visit the{" "}
              <a href="nmap_inthenews.html">press page</a>
              for further details.
            </li>
            <li>
              <b>Popular</b>: Thousands of people download Nmap every day, and
              it is included with many operating systems (Redhat Linux, Debian
              Linux, Gentoo, FreeBSD, OpenBSD, etc). It is among the top ten
              (out of 30,000) programs at the Freshmeat.Net repository. This is
              important because it lends Nmap its vibrant development and user
              support communities.
            </li>
          </ul>
          <h2 id="lists" class="purpleheader">
            Communication
          </h2>
          <p>
            Nmap users are encouraged to subscribe to the <i>Nmap-hackers</i>
            mailing list. It is a low volume (6 posts in 2017), moderated list
            for the most important announcements about Nmap, Insecure.org, and
            related projects. You can join more than 128,000 current subscribers
            by submitting your email address here:
          </p>
          <form
            method="POST"
            action="https://nmap.org/mailman/subscribe/announce"
          >
            <p class="center">
              <input type="Text" name="email" size="25" value="" />
              <input
                type="Submit"
                name="email-button"
                value="Subscribe to Nmap-hackers"
              />
              <br />
              (or subscribe with custom options from the{" "}
              <a href="https://nmap.org/mailman/listinfo/announce">
                Nmap-hackers list info page
              </a>
              )
            </p>
          </form>
          <p>
            We also have a development list for more hardcore members
            (especially programmers) who are interested in helping the project
            by helping with coding, testing, feature ideas, etc. New (test/beta)
            versions of Nmap are sometimes released here prior to general
            availability for QA purposes. You can subscribe at the{" "}
            <a href="https://nmap.org/mailman/listinfo/dev">
              Nmap-dev list info page
            </a>
            .
          </p>
          <p>
            Both lists are archived (along with many other security lists) at{" "}
            <a href="https://seclists.org">Seclists.org</a>.
          </p>
          <p>
            Though it isn't nearly as active as the mailing lists, the official
            IRC channel is #nmap on <a href="http://freenode.net/">Freenode</a>{" "}
            (irc.freenode.net).
          </p>
        </div>
        <form className="nst-search" id="nst-foot-search" action="/search/">
          <input
            className="nst-search-q"
            name="q"
            type="search"
            placeholder="Site Search"
          />
          <button className="nst-search-button" title="Search">
            <img
              alt=""
              aria-hidden="true"
              src="/shared/images/nst-icons.svg#search"
            />
          </button>
        </form>

        <footer id="nst-foot">
          <div className="flexlists">
            <div className="fl-unit">
              <h2>
                <a className="nlink" href="https://nmap.org/">
                  Nmap Security Scanner
                </a>
              </h2>
              <ul>
                <li>
                  <a className="nlink" href="https://nmap.org/book/man.html">
                    Ref Guide
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://nmap.org/book/install.html"
                  >
                    Install Guide
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://nmap.org/docs.html">
                    Docs
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://nmap.org/download.html">
                    Download
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://nmap.org/oem/">
                    Nmap OEM
                  </a>
                </li>
              </ul>
            </div>
            <div className="fl-unit">
              <h2>
                <a className="nlink" href="https://npcap.com/">
                  Npcap packet capture
                </a>
              </h2>
              <ul>
                <li>
                  <a className="nlink" href="https://npcap.com/guide/">
                    User's Guide
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://npcap.com/guide/npcap-devguide.html#npcap-api"
                  >
                    API docs
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://npcap.com/#download">
                    Download
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://npcap.com/oem/">
                    Npcap OEM
                  </a>
                </li>
              </ul>
            </div>
            <div className="fl-unit">
              <h2>
                <a className="nlink" href="https://seclists.org/">
                  Security Lists
                </a>
              </h2>
              <ul>
                <li>
                  <a
                    className="nlink"
                    href="https://seclists.org/nmap-announce/"
                  >
                    Nmap Announce
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://seclists.org/nmap-dev/">
                    Nmap Dev
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://seclists.org/fulldisclosure/"
                  >
                    Full Disclosure
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://seclists.org/oss-sec/">
                    Open Source Security
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://seclists.org/dataloss/">
                    BreachExchange
                  </a>
                </li>
              </ul>
            </div>
            <div className="fl-unit">
              <h2>
                <a className="nlink" href="https://sectools.org">
                  Security Tools
                </a>
              </h2>
              <ul>
                <li>
                  <a
                    className="nlink"
                    href="https://sectools.org/tag/vuln-scanners/"
                  >
                    Vuln scanners
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://sectools.org/tag/pass-audit/"
                  >
                    Password audit
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://sectools.org/tag/web-scanners/"
                  >
                    Web scanners
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://sectools.org/tag/wireless/"
                  >
                    Wireless
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://sectools.org/tag/sploits/">
                    Exploitation
                  </a>
                </li>
              </ul>
            </div>
            <div className="fl-unit">
              <h2>
                <a className="nlink" href="https://insecure.org/">
                  About
                </a>
              </h2>
              <ul>
                <li>
                  <a className="nlink" href="https://insecure.org/fyodor/">
                    About/Contact
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://insecure.org/privacy.html">
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    className="nlink"
                    href="https://insecure.org/advertising.html"
                  >
                    Advertising
                  </a>
                </li>
                <li>
                  <a className="nlink" href="https://nmap.org/npsl/">
                    Nmap Public Source License
                  </a>
                </li>
              </ul>
            </div>
            <div className="fl-unit social-links"></div>
          </div>
        </footer>
      </main>
    </div>
  );
}
