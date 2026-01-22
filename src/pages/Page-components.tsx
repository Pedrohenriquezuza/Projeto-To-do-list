import Badge from "../components/Badge";
import Button from "../components/Button";
import ButtonIcon from "../components/Button-icons";
import Card from "../components/Card";
import Container from "../components/Container";
import Icon from "../components/Icon";
import InputCheckBox from "../components/Input-checkbox";
import InputText from "../components/Input-text";
import Skeleton from "../components/skeleton";
import Text from "../components/Text"
import TrashIcon from "../assets/icons/trash.svg?react"
import CheckIcon from "../assets/icons/check.svg?react"
import PlusIcon from "../assets/icons/plus.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"
import PencilIcon from "../assets/icons/pencil.svg?react"
import XIcon from "../assets/icons/x.svg?react"

export default function PageComponents( ){
 return (
    <Container>
      <div className="grid gap-10">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá Mundo
          </Text>
          <Text className="text-green-base">Olá Mundo</Text>
          <Text variant="body-md-bold" className="text-green-dark">
            Olá Mundo
          </Text>
          <Text>Levar o dog para passear</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckBox />
          <InputCheckBox loading/>
        </div>

        <div>
          <Card size="md">Olá Mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-44" />
          <Skeleton />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
}