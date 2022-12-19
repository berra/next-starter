import Image from "next/image";
import Link from "next/link";
import { Home, Search } from "react-feather";
import { CustomProperties } from "../../ui/styles/customPropertiesTypes";
import Chips from "../components/Chips/Chips";

export default function Page() {
  return (
    <div className="stack container">
      <h1 className="my-400 text-fs-400">Text</h1>

      <div data-push-last-item className="[ cluster ] [ space-300 ]">
        <span className="with-icon">
          <Home className="icon" />
          First
        </span>
        <span className="with-icon">
          <Home className="icon" />
          Second
        </span>
        <span className="with-icon">
          <Home className="icon" />
          Third
        </span>
        <form className="[ form-search form-horizontal ]">
          <input type="search" name="s" id="search" placeholder="Search" />
          <button type="submit">
            <Search />
          </button>
        </form>
        <span className="with-icon">
          To the end
          <Home className="icon" />
        </span>
      </div>

      <Chips list={Array(7).fill("item with multiple words")} />

      <div className="[ box stack ] [ space-600 ]">
        <p>{"Text ".repeat(50)}</p>
        <p>{"Text ".repeat(50)}</p>
        <p>{"Text ".repeat(50)}</p>
      </div>
      <div
        className="box grid"
        style={{ "--grid-min-size": "30ch" } as CustomProperties}
      >
        <div className="box invert">{"Text ".repeat(50)}</div>
        <div className="box invert">{"Text ".repeat(50)}</div>
        <div className="box invert">{"Text ".repeat(50)}</div>
      </div>
      <div className="box">
        {["xs", 100, 200, 300, 400, 500, 600].map((i) => (
          <p className={`text-${i}`}>Text</p>
        ))}
      </div>
      <div className="box stack">
        <form action="" method="get" className="form-horizontal">
          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Aa" />
          </div>
          <div className="input-group">
            <label>E-mail address</label>
            <input type="password" placeholder="**" />
          </div>
          <div className="input-group">
            <button className="fs-0" type="submit">
              Send
            </button>
          </div>
        </form>
        <form action="" method="get" className="form-vertical stack">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input name="name" id="name" type="text" placeholder="Aa" />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-mail address</label>
            <input name="email" id="email" type="email" placeholder="**" />
          </div>
          <div className="input-group">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div
        className="[ box grid ] [ space-200 ]"
        style={{ "--grid-min-size": "20ch" } as CustomProperties}
      >
        <div data-push-last-item className="stack">
          <Image width={500} height={150} src="/rect.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum sagittis lacus id elementum. Fusce nec feugiat odio. Donec
            congue laoreet aliquet. Phasellus nec lacus arcu. Duis egestas ex
            non condimentum pretium.
          </p>
          <Link href="#">Link</Link>
        </div>
        <div data-push-last-item className="stack">
          <Image width={500} height={150} src="/rect.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum sagittis lacus id elementum. Fusce nec feugiat odio. Donec
            congue laoreet aliquet. Phasellus nec lacus arcu. Duis egestas ex
            non condimentum pretium.
          </p>
          <Link href="#">Link</Link>
        </div>
        <div data-push-last-item className="stack">
          <Image width={500} height={150} src="/rect.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            rutrum sagittis lacus id elementum.
          </p>
          <Link href="#">Link</Link>
        </div>
        <div data-push-last-item className="stack">
          <Image width={500} height={150} src="/rect.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam rutrum sagittis lacus id elementum. Fusce
            nec feugiat odio. Donec congue laoreet aliquet. Phasellus nec lacus
            arcu. Duis egestas ex non condimentum pretium.
          </p>
          <Link href="#">Link</Link>
        </div>
      </div>

      <div className="box">
        <div className="switcher">
          <div>
            <Image alt="" src="/rect.png" width="400" height="300" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              rutrum sagittis lacus id elementum. Fusce nec feugiat odio. Donec
              congue laoreet aliquet. Phasellus nec lacus arcu. Duis egestas ex
              non condimentum pretium. Integer hendrerit commodo blandit.
              Vestibulum id varius ante. Nam quis risus arcu. Etiam vitae
              efficitur urna, at semper libero. Etiam molestie tincidunt ex nec
              porta. Fusce lobortis luctus odio. Ut vel dolor sit amet urna
              facilisis suscipit. Phasellus est lectus, convallis id eros ac,
              semper mattis felis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
