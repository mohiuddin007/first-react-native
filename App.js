import React, { useState } from 'react';
import { Alert, 
  Button, 
  Image, 
  Platform, 
  ScrollView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  View } from 'react-native';
import extranalStyle from './Style';

export default function App() {
  const [usersChoice, setUsersChoice] = useState('');

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{
        backgroundColor: '#333333',
        flex: 1
      }}>
        <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, nihil qui omnis accusantium porro quod sequi consequuntur inventore atque possimus at quaerat dolores culpa corrupti soluta aperiam velit explicabo impedit, quo beatae rerum eaque. Sapiente, dolores quisquam quibusdam distinctio magnam perspiciatis officia amet quasi libero? Quo inventore officia itaque alias quos, dolores reprehenderit, sapiente numquam praesentium voluptatem nemo sequi impedit doloribus cum aperiam laborum modi minus, molestias rerum odit. Vel obcaecati libero, repellendus ullam earum ducimus quia molestias totam ratione quasi voluptatum asperiores fugiat ea excepturi, perferendis ab nisi et! Alias, repudiandae ullam accusantium possimus adipisci delectus iusto at similique sit debitis dolorum quia id pariatur voluptatibus. Harum eaque commodi recusandae assumenda rem itaque officia hic laudantium? Ea recusandae expedita commodi atque aperiam, totam, ex facere officia quos ipsum labore debitis nobis maiores autem vel ab nesciunt, aut deserunt possimus beatae rem nulla adipisci! Ad amet voluptates esse voluptas a odit eveniet facere beatae, eos provident explicabo quaerat neque architecto fuga totam accusamus, obcaecati rerum ea inventore. Tempore mollitia libero eum error. Assumenda laborum eligendi ipsum ducimus, enim blanditiis quis tempore a eos magni. Id illo pariatur cumque amet eaque corrupti assumenda, accusantium laborum totam labore voluptatum. Magnam praesentium quos, reiciendis est alias recusandae reprehenderit mollitia ab inventore unde cum laboriosam ea, nulla molestias eos voluptatum sit at earum vel? Asperiores perspiciatis culpa assumenda sit dolores vitae a provident libero exercitationem perferendis molestiae similique, sapiente reiciendis, fugit mollitia sint at dolor, cupiditate consequuntur facilis et voluptatum! Nulla, labore totam quos debitis doloribus molestias quam mollitia incidunt asperiores velit ipsum corrupti provident officia culpa possimus a doloremque. Doloremque non molestias consectetur porro nostrum omnis quidem dolorum quo quibusdam. Temporibus facilis ex tenetur quo doloribus aut aliquid assumenda nobis itaque ducimus quibusdam molestiae ad placeat dolorem fugit perferendis eum nisi odit, autem, ab dolore. Cum minima architecto dicta harum porro corrupti! Unde molestias aliquam sed veritatis ullam nihil! Ipsa quidem praesentium magnam atque veniam, soluta consectetur maiores voluptatum minus inventore sint quibusdam tempore asperiores voluptas aperiam eaque iusto odit. Commodi deleniti corporis accusamus facere asperiores sed repellendus quasi officia itaque beatae facilis doloribus est qui, consequatur totam? Hic nihil magni accusantium rem esse temporibus modi dolores quod dolor, commodi nobis magnam, id odio aliquid mollitia iure ex quas cupiditate, beatae adipisci? Fugit quisquam incidunt reprehenderit vero exercitationem deleniti eveniet sapiente soluta at possimus doloribus, repellendus, reiciendis accusamus ad non odit quos? Similique adipisci praesentium itaque, eum quisquam distinctio quod hic sequi, quae fugiat necessitatibus, tenetur corrupti molestiae facere voluptatum alias fugit impedit saepe fuga nesciunt dolores voluptatem iusto at obcaecati. Obcaecati illo temporibus repellat. Commodi delectus molestiae, maxime voluptatibus earum similique quia, soluta necessitatibus officia reiciendis iste harum maiores hic deserunt perferendis, obcaecati quae quasi magnam inventore! Numquam sed ad cupiditate. Eos placeat quod provident repudiandae temporibus ducimus quisquam cum sed explicabo odio natus blanditiis veritatis iure fugit quasi laboriosam corrupti, ratione a quibusdam at ipsa dolores praesentium velit! Molestias veniam corrupti quibusdam tempore officia, dolores rerum facilis asperiores molestiae ipsa mollitia perspiciatis atque voluptatem fugiat doloremque perferendis accusantium veritatis. Repudiandae ipsum nemo ipsa quisquam natus suscipit a alias laboriosam dolore quibusdam. Repellat corporis, suscipit sequi accusantium provident eligendi molestiae maiores beatae deserunt eius libero natus laborum quas odit ipsa voluptatem, magni id ea eum, in officia temporibus corrupti optio aliquid. Incidunt veritatis voluptatibus ab eius cupiditate consequatur quis, atque a vel, eligendi vero tenetur cum alias quo. Quasi omnis rerum officia illo. Soluta cumque minus similique asperiores! Voluptatem, consequuntur exercitationem dicta ad quam, odit quidem vitae, quia soluta voluptates quasi nihil ea. Porro officiis rerum repudiandae tempora doloremque voluptate eos, quaerat dolore facere itaque consequatur. Minima neque odio recusandae tempora quibusdam. Quasi consectetur dignissimos omnis porro unde similique ducimus tenetur fugit, reiciendis, error animi officiis voluptatum odit quae minus quam. Consectetur alias error repudiandae officia, quae tempora. Accusantium corrupti quam modi voluptatum soluta doloribus error fuga dolorum ratione velit, laudantium voluptate neque eaque est illum facilis consectetur voluptas! Iste velit labore eum facere quae esse nam, consectetur quas soluta doloremque deserunt ipsa temporibus incidunt aliquam tenetur enim! Voluptatum libero vitae molestiae quisquam ut dolorem id iure praesentium nisi, velit nihil. Molestias ipsa itaque eos asperiores repellendus laborum doloremque iure vero praesentium molestiae iusto dicta voluptatum eum, corporis dolorum animi amet quasi neque atque distinctio exercitationem sint sapiente! Nam debitis explicabo tempora recusandae, repudiandae, quo non aperiam dolore laboriosam odit, maiores modi sit. Quasi nisi inventore fugiat hic in provident odio saepe veniam vel accusantium reprehenderit expedita, repudiandae, quisquam, consectetur vero quae eligendi. Ex sint totam sit fugit rem quod! Ratione magni, molestias corporis itaque quas ducimus blanditiis nam vitae hic, voluptatem voluptatibus necessitatibus rerum eveniet aut aspernatur! Ad soluta repudiandae adipisci natus nisi earum tenetur modi eius voluptate unde vero exercitationem facere possimus, neque odio quis quod nulla non ea saepe rerum cumque consectetur accusamus eos! Magnam placeat cum accusamus aut nam quos voluptatum, commodi exercitationem eius repellendus quibusdam sunt accusantium? Maxime ex nihil natus nostrum dicta. Et incidunt, placeat officiis voluptates, obcaecati a illo fugiat amet modi quam facere reiciendis totam error quod nulla autem tenetur ullam assumenda odit repudiandae. Atque debitis aliquam deleniti tempore officia consequatur, illo explicabo eaque odit maiores laborum iste esse reiciendis dolorum dolorem repudiandae ut impedit libero nulla exercitationem odio praesentium, eum optio nihil? Iste fuga perspiciatis pariatur praesentium rerum quia dolor cum asperiores, repellat labore voluptatibus illum quaerat sunt. Facilis voluptatem beatae pariatur incidunt necessitatibus rem temporibus sed obcaecati, corporis eaque, veniam aut expedita sequi impedit ducimus id? Accusamus deleniti soluta voluptatum ipsa, tempore ab magnam eligendi? Sunt illum maiores eligendi consequuntur quia, accusamus maxime minus dolorem dolorum voluptate vel voluptates natus porro velit voluptatem eum, omnis perferendis ad, laboriosam adipisci! Eaque laudantium est cupiditate sequi ab fugiat magni similique quisquam? Itaque alias saepe minus odio. Veritatis, earum eveniet dolorem repellat itaque unde dignissimos praesentium pariatur sunt perspiciatis, quam vel in repudiandae velit doloremque tempora libero doloribus? Incidunt facere necessitatibus corporis cupiditate! Odit facilis laboriosam quis! Incidunt eum soluta saepe qui quos distinctio ea?</Text>
      </ScrollView>
      <ScrollView style={{ 
        backgroundColor: '#ffffff', 
        flex: 3 }}>
          <Text>Finally, i start my react native app with expo</Text>
          <Text>I am so much excited about react native app development</Text>
          <Text numberOfLines={1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, earum? Lorem ipsum dolo</Text>
            
          <TouchableOpacity onPress={() => console.log('Image tapped')}>
            <Image
              // blurRadius={2}
              fadeDuration={1000}
              source={{
                width: 200,
                height: 200,
                uri: 'https://cdn.pixabay.com/photo/2020/11/01/23/22/breakfast-5705180_960_720.jpg'
              }} />
          </TouchableOpacity>
          <Button title={"Click me baby"} onPress={() => Alert.alert('Confirmation', 'Do you really want to play with me?', [
            { text: 'Yes', onPress: () => setUsersChoice('Yah, Says yes') },
            { text: 'No', onPress: () => setUsersChoice('Sorry, He is busy to scrolling') }
          ])} color="#841584" />
          <Text> {usersChoice}</Text>
          <Button title={`Prompt box isn't work on android devices`} onPress={() => Alert.prompt(console.log('yes'))} />

          <View style={extranalStyle.content}>
          <Text>Welcome!!!</Text>
        </View>
      </ScrollView>
      <View style={{ backgroundColor: 'yellow', flex: 1 }}> 
            <Image source={require('./assets/Screenshot_2020-04-26-20-08-48.png')} style={{width: 360, height: 250}}/>
      </View> */}

      {/* <View style={{ backgroundColor: 'dodgerblue', width: 80, height: 300}}></View>
      <View style={{ backgroundColor: 'orange', width: 80, height: 200}}></View>
      <View style={{ backgroundColor: 'gray', width: 80, height: 100, alignSelf: 'center'}}></View>
      <View style={{ backgroundColor: 'orange', width: 80, height: 80}}></View> */}

{/* <View style={{ backgroundColor: 'orange', width: 80, height: 180}}></View>
<View style={{ backgroundColor: 'dodgerblue', width: 80, height: 80}}></View>
<View style={{ backgroundColor: '#181818', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'green', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'yellow', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'red', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'gray', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'blue', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'black', width: 80, height: 80}}></View> */}

<View style={{ backgroundColor: 'gray', 
// flexBasis: 280, //width or height
// flexGrow: 1,
width: 80, 
// flexShrink: 1,
height: 80
}}></View>
<View style={{ backgroundColor: 'blue', width: 80, height: 80}}></View>
<View style={{ backgroundColor: 'black', width: 80, height: 80}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'row',
    justifyContent: 'center', 
    // alignItems: 'baseline',
    alignItems: 'center',
    // flexWrap: 'wrap',
    // alignContent: 'center',  //it uses for whole entire content alignment
    
  },
});
