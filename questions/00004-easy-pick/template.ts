type MyPick<Type, Key extends keyof Type> = {
    [Property in Key]: Type[Property]
}
