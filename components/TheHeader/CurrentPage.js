import { useRouter } from "next/router";
import cx from "classnames";

function CurrentPage({ className }) {
    const { asPath, isReady } = useRouter();

    return (
        <>
            {isReady && (
                <div className={cx(className, "-cursor--default")}>{asPath}</div>
            )}
        </>
    );
}

export default CurrentPage;
