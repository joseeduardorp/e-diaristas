import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os profissionais'}
        subtitle={'Preencha seu endereço e conheça todos os profissionais da sua localidade'}
      />
      <UserInformation
        name={"José Eduardo"}
        picture={"https://github.com/joseeduardorp.png"}
        rating={3}
        description={"São José dos Campos"}
      />
    </div>
  )
}
