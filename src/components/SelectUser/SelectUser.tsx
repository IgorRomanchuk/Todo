import { useEffect, useState } from "react";
import UsersService from "../../service/users.service";
import { UsersModel } from "../../models/users.model";
import { useAuth } from "../../utils/hooks/useAuth";
import { SelectStyle } from "./styles";

type Props = {
  onChange: (e: string) => void;
};

export const SelectUser = ({ onChange }: Props) => {
  const { user } = useAuth();
  const [users, setUsers] = useState<UsersModel[]>([]);

  const getUsers = async () => {
    const data = await UsersService.getUsers();
    setUsers(data.filter((item) => item.id !== user.id));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <SelectStyle defaultValue="" onChange={(e) => onChange(e.target.value)}>
      <option value="" disabled hidden>
        Please choose user...
      </option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.username}
        </option>
      ))}
    </SelectStyle>
  );
};
