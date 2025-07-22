import { _decorator, Component, Node, Prefab, instantiate, SpriteFrame, AudioSourceComponent, AudioClip, Label } from 'cc';
import { Card } from './Card';

const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Prefab)
    cardPrefab: Prefab = null;

    @property(Node)
    cardContainer: Node = null;

    @property([SpriteFrame])
    frontFrames: SpriteFrame[] = [];

    @property(SpriteFrame)
    backFrame: SpriteFrame = null;

    @property(AudioSourceComponent)
    audioSource: AudioSourceComponent = null;

    @property(AudioClip)
    flipSound: AudioClip = null;

    @property(AudioClip)
    matchSound: AudioClip = null;

    @property(AudioClip)
    wrongSound: AudioClip = null;

    @property(Label)
    scoreLabel: Label = null;

    private cards: Card[] = [];
    private firstCard: Card = null;
    private secondCard: Card = null;
    private isChecking: boolean = false;
    private totalMatches: number = 0;

    start() {
        // Game does not auto-start. Wait for StartButton click.
        this.updateScoreLabel();
    }

    onStartClick() {
        this.resetGame();
        this.spawnCards();
    }

    onRestartClick() {
        this.resetGame();
        this.spawnCards();
    }

    resetGame() {
        this.cardContainer.removeAllChildren();
        this.cards = [];
        this.firstCard = null;
        this.secondCard = null;
        this.isChecking = false;
        this.totalMatches = 0;
        this.updateScoreLabel();
    }

    spawnCards() {
        const totalPairs = this.frontFrames.length;
        const spriteList: SpriteFrame[] = [];

        for (let i = 0; i < totalPairs; i++) {
            spriteList.push(this.frontFrames[i]);
            spriteList.push(this.frontFrames[i]);
        }

        this.shuffle(spriteList);

        for (let i = 0; i < spriteList.length; i++) {
            const cardNode = instantiate(this.cardPrefab);
            const card = cardNode.getComponent(Card);
            card.init(spriteList[i], this.backFrame, this.onCardClicked.bind(this));
            this.cardContainer.addChild(cardNode);
            this.cards.push(card);
        }
    }

    onCardClicked(clickedCard: Card) {
        if (this.isChecking || clickedCard.isRevealed) return;

        clickedCard.reveal();

        this.audioSource?.playOneShot(this.flipSound);

        if (!this.firstCard) {
            this.firstCard = clickedCard;
        } else if (!this.secondCard) {
            this.secondCard = clickedCard;
            this.isChecking = true;

            this.scheduleOnce(() => {
                this.checkMatch();
            }, 0.8);
        }
    }

    checkMatch() {
        if (this.firstCard.spriteFrame === this.secondCard.spriteFrame) {
            this.audioSource?.playOneShot(this.matchSound);

            this.totalMatches++;
            this.firstCard.lock();
            this.secondCard.lock();
            this.updateScoreLabel();

            if (this.totalMatches === this.frontFrames.length) {
                console.log("🎉 Game Over - All Matches Found!");
            }
        } else {
            this.audioSource?.playOneShot(this.wrongSound);

            this.firstCard.hide();
            this.secondCard.hide();
        }

        this.firstCard = null;
        this.secondCard = null;
        this.isChecking = false;
    }

    updateScoreLabel() {
        if (this.scoreLabel) {
            this.scoreLabel.string = `Score: ${this.totalMatches}`;
        }
    }

    shuffle(array: any[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}
