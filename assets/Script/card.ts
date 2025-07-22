import { _decorator, Component, Sprite, SpriteFrame, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('CardComponent')  // ✅ Use a unique name instead of 'Card'
export class CardComponent extends Component {
    @property({ type: Sprite })
    frontSprite: Sprite | null = null;

    @property({ type: Sprite })
    backSprite: Sprite | null = null;

    public isFlipped: boolean = false;
    public id: number = 0;

    /**
     * Initializes the card with id and sprite frames.
     */
    init(id: number, frontFrame: SpriteFrame, backFrame: SpriteFrame) {
        this.id = id;
        if (this.frontSprite) this.frontSprite.spriteFrame = frontFrame;
        if (this.backSprite) this.backSprite.spriteFrame = backFrame;
        this.flip(false);
    }

    /**
     * Flips the card to show front or back.
     */
    flip(showFront: boolean) {
        if (this.frontSprite) this.frontSprite.node.active = showFront;
        if (this.backSprite) this.backSprite.node.active = !showFront;
        this.isFlipped = showFront;
    }
}
