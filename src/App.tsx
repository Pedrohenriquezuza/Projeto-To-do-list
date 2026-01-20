import Text from "./components/Text";
import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";

import Icon from "./components/Icon";
import Badge from "./components/Badge";
import Button from "./components/Button";
import ButtonIcon from "./components/Button-icons";
import InputText from "./components/Input-text";
import InputCheckBox from "./components/Input-checkbox";
import Card from "./components/Card";
import Container from "./components/Container";

export default function App() {
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

      <div>
        <Badge variant="secondary">5</Badge>
        <Badge variant="primary">2 de 5</Badge>
      </div>

      <div>
        <Button icon={PlusIcon}>Nova tarefa</Button>
      </div>

      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} />
        <ButtonIcon icon={TrashIcon} variant="secondary" />
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
      </div>

      <div>
        <InputText />
      </div>

      <div>
        <InputCheckBox />
      </div>

      <div>
        <Card size="md">Olá Mundo</Card>
      </div>
    </div>
    </Container>
  );
}
