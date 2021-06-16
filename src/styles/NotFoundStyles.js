import bg from './bg.svg';

const styles = {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundColor: "#394bad",
        backgroundImage: `url(${bg})`
    },
    main: {
        width: "40%",
        height: "25%",
        backgroundColor: "white",
        opacity: "0.5",
        borderRadius: "15px",
        fontSize: "1.5rem"
    },
    title: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bolder"
    }
};

export default styles;