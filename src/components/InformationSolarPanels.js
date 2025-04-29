import Page from "./Page";
import Text from "./Text";
import SmallText from "./SmallText";

export default function InformationSolarPanels() {
    return (
        <Page image='/SolarPanels.png' title="Solar Panels">
            <div className="w-[86%] text-center mx-[7%]">
                <Text>Introduction</Text><br/>
                <SmallText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel ex nec velit
                    condimentum luctus sed quis purus. Morbi at congue metus. Curabitur arcu erat, vehicula sit amet
                    tempor lacinia, sodales viverra tellus. Donec facilisis faucibus velit vitae rutrum. Donec ut
                    varius erat, ut dignissim felis. Cras vitae iaculis nibh, nec iaculis velit. Vivamus eget ante ac
                    quam ultricies molestie et nec nunc. Sed porta nibh ut justo mattis dignissim. Etiam vel pellentesque
                    dolor.<br />
                    Sed lacinia libero eu augue sagittis egestas sed eget erat. Proin aliquet malesuada lacinia.
                    Suspendisse dapibus ligula vitae dui viverra malesuada. Suspendisse id blandit justo, eget suscipit
                    nunc. Maecenas sagittis risus sit amet bibendum sodales. Nulla eu sagittis sapien, in porttitor
                    odio. Aliquam congue velit ante, eu laoreet turpis blandit et. Vestibulum ac sodales nibh. Aliquam
                    laoreet nisl eget urna ultrices fermentum. In tristique ipsum sed magna sagittis, sit amet finibus
                    nibh dignissim. Aliquam libero ipsum, pulvinar sit amet euismod eu, aliquet eget nisl. Maecenas
                    venenatis sagittis purus quis vestibulum. Integer posuere pharetra luctus.<br />
                    Praesent eget scelerisque risus, et congue lectus. In sit amet risus ac neque sodales vulputate
                    vestibulum a lacus. Duis ac lacus et elit lacinia sollicitudin nec auctor dui. Vivamus et libero
                    nec ipsum aliquam faucibus. Nunc nec metus vitae arcu congue vulputate. Phasellus convallis tellus
                    vitae suscipit rhoncus. Duis sodales lorem vitae sapien luctus varius. Cras egestas hendrerit
                    interdum. Sed molestie ipsum nisi, vitae ullamcorper augue efficitur sit amet.<br />
                </SmallText>
            </div>
        </Page>
    )
}