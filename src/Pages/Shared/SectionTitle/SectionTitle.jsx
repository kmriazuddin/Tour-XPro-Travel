
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center my-5">
            <p className="text-lime-500">{subHeading}</p>
            <h3 className="md:text-2xl lg:text-4xl font-semibold">{heading}</h3>
            <img className="m-auto" src="https://i.ibb.co/SdK0n79/section-title-vector.png" alt="image" />
        </div>
    );
};

export default SectionTitle;