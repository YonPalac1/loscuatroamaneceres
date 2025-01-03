const Container = ({ children, bullet }) => {

    return <div className={`section-container section-container-${bullet}`}>
        {children}
    </div>
}
export default Container;